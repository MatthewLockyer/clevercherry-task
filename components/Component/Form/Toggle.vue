<script setup lang="ts">
const props = defineProps({
    value: {
        type: Boolean,
        default: false,
    },
    error: {
        type: String,
        required: false,
        default: null,
    },
    describedBy: {
        type: String,
        required: false,
    },
});

const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
    emit("update:value", (event.target as HTMLInputElement).checked);
};
</script>

<template>
    <div>
        <label class="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                :checked="value"
                @input="updateValue"
                class="sr-only peer"
                :aria-describedby="error ? 'checkbox-error' : describedBy"
            />
            <div
                class="w-[32px] h-[16px] bg-[#C9C9C9] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white rounded-full peer peer-checked:after:translate-x-[calc(100%+4px)] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-primary"
            ></div>
            <span class="sr-only">Toggle</span>
        </label>

        <span id="checkbox-error" class="text-red-500" v-if="error">{{
            error
        }}</span>
    </div>
</template>
