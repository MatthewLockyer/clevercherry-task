<script setup lang="ts">
//get current year

const currentYear = new Date().getFullYear();
</script>

<template>
    <div
        class="text-center text-white pb-[50px] bg-[#0D0427] px-3 lg:px-10 xl-px-1"
    >
        <img
            src="/img/master-logo.svg"
            alt="Clever Cherry"
            loading="lazy"
            width="326"
            class="mx-auto mb-8"
        />
        <p class="text-sm mb-8">
            22 Gas Street, Birmingham B1 2JT
            <a
                href="mailto:hello@clevercherry.com"
                class="sm:inline ml-2 pl-2 sm:border-l block cursor-pointer hover:underline"
                >hello@clevercherry.com</a
            >
        </p>
        <p class="text-xs">&copy; Clevercherry {{ currentYear }}</p>
    </div>
</template>
