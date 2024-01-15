<script setup lang="ts">
const props = defineProps({
    duration: {
        type: Number,
        default: 4000,
    },
});

const visible = ref(false);

onMounted(() => {
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, props.duration);
});
</script>

<template>
    <Teleport to="body">
        <div
            v-if="visible"
            class="fixed top-5 w-4/5 left-1/2 transform -translate-x-1/2 max-w-sm mx-auto z-50"
        >
            <div
                class="relative custom-toast bg-gradient-to-b from-[#240e5980] to-transparent text-xl backdrop-blur-md text-white px-5 py-3 rounded-lg text-center before:absolute before:top-[0px] before:left-0 before:right-0 before:h-[1px] before:w-full before:from-transparent before:to-transparent before:via-[#C59AFD]/40 before:to-90% z-[2] before:from-10% before:bg-gradient-to-r"
            >
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
@keyframes fadeInOut {
    0%,
    100% {
        opacity: 0;
        transform: translateY(-40px);
    }
    10%,
    90% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.custom-toast {
    animation: fadeInOut 4.1s linear;
}

.custom-toast::after {
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
