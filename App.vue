<script setup lang="ts"></script>

<template>
    <div>
        <img
            src="/img/bg-stars.webp"
            alt=""
            class="absolute top-0 left-0 right-0 w-full mix-blend-color-dodge pointer-events-none max-w-[1502px] mx-auto"
            width="1,496.6"
            height="678"
        />
        <Site-Header />
        <NuxtPage class="fade-in" />

        <Site-Footer />
    </div>
</template>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        filter: blur(1rem);
    }
    to {
        opacity: 1;
        filter: blur(0);
    }
}

.fade-in {
    animation: fadeIn 1s ease-in-out;
}
</style>
