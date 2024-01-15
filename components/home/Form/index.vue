<script setup lang="ts"></script>

<template>
    <div class="relative bg-[#0D0428] pb-11 px-3 lg:px-10 xl-px-1">
        <img
            src="/img/background-asteroids.webp"
            class="mix-blend-screen w-full object-cover left-0 right-0 bottom-[-37.025px] absolute pointer-events-none max-w-[1920px] mx-auto"
            width="1728"
            height="775.5"
            alt=""
        />
        <div
            class="max-w-[973px] custom-border mx-auto backdrop-blur-[7.5px] p-5 lg:p-11 bg-gradient-to-b from-[#240e5980] to-transparent relative before:absolute before:top-[0px] before:left-0 before:right-0 before:h-[1px] before:w-full before:from-transparent before:to-transparent before:via-[#C59AFD]/40 before:to-90% z-[2] before:from-10% before:bg-gradient-to-r rounded-[20px]"
        >
            <div class="text-center mb-5">
                <h2 class="mb-3 text-pretty">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p class="text-white/75">
                    Please complete the form below, then one of the team will
                    get in touch with you shortly.
                </p>
            </div>
            <Home-Form-Enquiry />
        </div>
    </div>
</template>

<style scoped>
.custom-border::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: solid 1px #503285;
    border-radius: inherit;
    z-index: -1;
    -webkit-mask-image: linear-gradient(to bottom, black, transparent 90%);
}
</style>
