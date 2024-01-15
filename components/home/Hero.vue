<script setup lang="ts"></script>

<template>
    <div class="relative py-5 lg:pt-[100px] lg:pb-[150px]">
        <div
            class="grid lg:grid-cols-2 gap-4 xl:gap-11 items-stretch max-w-[1502px] px-3 lg:px-10 2xl:px-1 mx-auto z-[2]"
        >
            <div
                class="flex flex-col text-center lg:text-start items-center lg:items-start gap-6 justify-between"
            >
                <img
                    src="/img/master-logo.svg"
                    alt="Clever Cherry logo"
                    class="lg:mb-8 mb-4 w-fit"
                />
                <h1 class="text-white text-balance">
                    This is a
                    <span class="text-primary">lovely little landing page</span>
                    that should hopefully be
                    <span class="text-primary"
                        >relatively straightforward to build.</span
                    >
                </h1>
                <p class="text-xl text-pretty font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div>
                    <Component-Button
                        text="Call to action"
                        icon="/img/tools.svg"
                        url="#"
                    />
                </div>
            </div>
            <div class="flex">
                <img
                    src="/img/hero-img.webp"
                    alt="A futuristic blue-lit corridor with reflective surfaces creating an infinite mirror effect."
                    class="rounded-[50px] h-full w-full object-cover"
                    height="467"
                    width="708"
                />
            </div>
        </div>
    </div>
</template>
