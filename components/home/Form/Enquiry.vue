<script setup lang="ts">
const form = reactive({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
    terms: false,
});

const formErrors = reactive({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
    terms: "",
});

const formText = ref("Send Enquiry");

const isLoading = ref(false);
const formJustSubmitted = ref(false);
const validateEmail = (email: string) => {
    const re =
        // eslint-disable-next-line no-control-regex
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

const submitForm = (e: Event) => {
    e.preventDefault();

    try {
        if (!form.fullName) {
            formErrors.fullName = "Please enter your full name";
        }

        if (!form.email) {
            formErrors.email = "Please enter your email";
        } else if (!validateEmail(form.email)) {
            formErrors.email = "Please enter a valid email";
        }

        if (!form.phoneNumber) {
            formErrors.phoneNumber = "Please enter your phone number";
        }

        if (!form.company) {
            formErrors.company = "Please enter your company";
        }

        if (!form.message) {
            formErrors.message = "Please enter your message";
        }

        if (
            formErrors.fullName ||
            formErrors.email ||
            formErrors.phoneNumber ||
            formErrors.company ||
            formErrors.message ||
            formErrors.terms
        ) {
            return;
        }

        isLoading.value = true;

        formText.value = "Sending Enquiry...";
        setTimeout(() => {
            isLoading.value = false;

            form.fullName = "";
            form.email = "";
            form.phoneNumber = "";
            form.company = "";
            form.message = "";
            form.terms = false;

            formText.value = "Enquiry Sent";

            formJustSubmitted.value = true;
            setTimeout(() => {
                formText.value = "Send Enquiry";

                formJustSubmitted.value = false;
            }, 4000);
        }, 3000);
    } catch (error) {
        alert("Something went wrong, please try again later");
    }
};
</script>

<template>
    <form
        class="relative rounded-[20px] bg-gradient-to-b from-white/30 to-transparent p-3 lg:p-6"
    >
        <div class="grid lg:grid-cols-2 gap-3 lg:gap-5">
            <Component-Form-Input
                label="Full Name"
                name="Full-Name"
                @input="
                    (form.fullName = $event.target.value),
                        (formErrors.fullName = '')
                "
                :value="form.fullName"
                :error="formErrors.fullName"
                placeholder="Enter Full Name"
                class="mb-1 lg:mb-0"
            ></Component-Form-Input>
            <Component-Form-Input
                label="Email"
                name="Email"
                @input="
                    (form.email = $event.target.value.toLowerCase()),
                        (formErrors.email = '')
                "
                :value="form.email"
                :error="formErrors.email"
                type="email"
                placeholder="Enter Email"
            ></Component-Form-Input>

            <Component-Form-Input
                label="Phone Number"
                name="Phone-Number"
                @input="
                    (form.phoneNumber = $event.target.value),
                        (formErrors.phoneNumber = '')
                "
                :value="form.phoneNumber"
                type="tel"
                :error="formErrors.phoneNumber"
                placeholder="Enter Phone Number"
            ></Component-Form-Input>
            <Component-Form-Input
                label="Company"
                name="Company"
                @input="
                    (form.company = $event.target.value),
                        (formErrors.company = '')
                "
                :value="form.company"
                :error="formErrors.company"
                placeholder="Enter Company"
            ></Component-Form-Input>
            <Component-Form-TextArea
                label="Message"
                name="Message"
                @input="
                    (form.message = $event.target.value),
                        (formErrors.message = '')
                "
                :value="form.message"
                :error="formErrors.message"
                placeholder="Enter Your Message..."
                class="lg:col-span-2"
                :rows="5"
            ></Component-Form-TextArea>
        </div>
        <div class="flex gap-2 my-5">
            <div class="translate-y-[4px]">
                <Component-Form-Toggle
                    :value="form.terms"
                    @input="
                        (form.terms = $event.target.checked),
                            (formErrors.terms = '')
                    "
                    describedBy="Accept Terms & Conditions"
                />
            </div>
            <p>
                I confirm I have read and agree to the Terms & Conditions and
                Privacy Policy. This site is protected by reCAPTCHA and the
                Google Privacy Policy and Terms of Service apply.
            </p>
        </div>

        <Component-Button
            :text="formText"
            icon="/img/tools.svg"
            :isButton="true"
            :isLoading="isLoading"
            @click="submitForm"
        />
    </form>
    <Component-Toast v-if="formJustSubmitted">
        <p>Thank you for your enquiry, we will be in touch shortly.</p>
    </Component-Toast>
</template>
