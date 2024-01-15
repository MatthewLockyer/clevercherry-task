<script setup>
const props = defineProps({
    icon: String,
    text: String,
    iconPosition: String,
    url: String,
    isButton: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="relative group inline-flex rounded-lg">
        <div
            class="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-gradient-to-t from-[#6C2DD5] to-[#4C15A6] rounded-lg"
        ></div>
        <div
            class="absolute top-[-1px] left-0 right-0 h-[1px] w-full from-transparent to-transparent from-10% to-90% via-[#E4E4E4] bg-gradient-to-r"
        ></div>
        <component
            :is="isButton ? 'button' : 'a'"
            :href="!isButton ? url : null"
            class="bg-gradient-to-b from-[#7534DF] from-[17.68%] to-[73.17%] to-[#4C15A6] inline-flex items-center gap-1 pe-3 ps-1 py-[4.5px] rounded-lg z-[2]"
            :class="isDisabled ? 'cursor-not-allowed' : ''"
            :type="isButton ? 'button' : null"
            :disabled="isDisabled || isLoading"
            :aria-disabled="isDisabled || isLoading"
        >
            <div class="group-hover:bg-white/20 bg-white/10 rounded-[5px] p-1">
                <div :class="{ hidden: !isLoading }">
                    <Icon
                        name="svg-spinners:8-dots-rotate"
                        class="w-[22px] h-[22px]"
                    />
                </div>
                <img
                    :class="{ hidden: isLoading || !icon }"
                    :src="icon"
                    alt=""
                    class="w-[22px]"
                />
            </div>
            <span class="text-white/75">
                {{ text }}
            </span>
        </component>
    </div>
</template>
