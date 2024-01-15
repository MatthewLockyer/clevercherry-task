<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
        default: null,
    },
    value: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: false,
        default: null,
    },
    rows: {
        type: Number,
        required: false,
        default: 3, // Adjust default rows for better usability
    },
});

const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
    emit("update:value", (event.target as HTMLInputElement).checked);
};
</script>

<template>
    <div>
        <label :for="name" class="block text-xs font-medium text-white">
            {{ label }}
        </label>
        <div class="mt-1">
            <textarea
                :id="name"
                :name="name"
                :placeholder="placeholder"
                :rows="rows"
                :value="value"
                @input="updateValue"
                :aria-describedby="error ? `${name}-error` : undefined"
                class="placeholder-white/40 text-white border-white/20 border-[1px] bg-[#bcbcbc33] rounded-lg w-full p-2"
            ></textarea>
        </div>
        <p class="mt-2 text-sm text-red-600" v-if="error">
            {{ error }}
        </p>
    </div>
</template>
