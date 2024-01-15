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
    type: {
        type: String,
        required: false,
        default: "text",
    },
    error: {
        type: String,
        required: false,
        default: null,
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
            <input
                :id="name"
                :name="name"
                :value="value"
                :placeholder="placeholder"
                @input="updateValue"
                :aria-describedby="error ? `${name}-error` : undefined"
                :type="type"
                class="placeholder-white/40 text-white border-white/20 border-[1px] bg-[#bcbcbc33] rounded-lg w-full p-2"
            />
        </div>

        <p v-if="error" :id="`${name}-error`" class="mt-2 text-sm text-red-600">
            {{ error }}
        </p>
    </div>
</template>
