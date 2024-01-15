<script setup lang="ts">
type TabItem = {
    name: string;
};

const props = defineProps({
    tabs: {
        type: Array as PropType<TabItem[]>,
        default: () => [],
    },
});

const currentTab = ref("");

onMounted(() => {
    if (props.tabs.length > 0) {
        currentTab.value = props.tabs[0].name;
    }
});
</script>

<template>
    <div class="lg:py-9 py-5 max-w-[1502px] mx-auto relative">
        <ul class="flex w-full translate-y-[1px]" role="tablist">
            <li
                v-for="(tab, index) in props.tabs"
                :key="tab.name"
                class="w-full"
            >
                <button
                    role="tab"
                    :aria-selected="currentTab === tab.name ? 'true' : 'false'"
                    :aria-controls="`tab-panel-${tab.name}`"
                    :class="[
                        'w-full p-2 lg:p-4 text-[#E4E4E4] leading-[1] text-start cursor-pointer border-white/50  lg:text-[1.125rem] b-[1px] border',
                        currentTab === tab.name
                            ? 'bg-[#221644] border-b-0'
                            : 'bg-white/20',
                        index === 0 && currentTab !== tab.name
                            ? 'border-r-0'
                            : '',
                        index === props.tabs.length - 1 &&
                        currentTab !== tab.name
                            ? 'border-l-0'
                            : '',
                        index > 0 &&
                        index < props.tabs.length - 1 &&
                        currentTab !== tab.name
                            ? 'border-x-0'
                            : '',
                        index === 0 ? 'rounded-tl-lg ' : '', // Add border-radius to the top left and bottom left of the first tab
                        index === props.tabs.length - 1 ? 'rounded-tr-lg ' : '', // Add border-radius to the top right and bottom right of the last tab
                    ]"
                    @click="currentTab = tab.name"
                >
                    {{ tab.name }}
                </button>
            </li>
        </ul>

        <div
            v-for="tab in props.tabs"
            :key="`panel-${tab.name}`"
            :id="`tab-panel-${tab.name}`"
            :aria-labelledby="tab.name"
            role="tabpanel"
            :hidden="currentTab !== tab.name"
            class="bg-[#221644] text-[#E4E4E4] p-5 rounded-b-[5px] lg:p-8 border-t-0 border-white/50 b-[1px] border"
        >
            <h2 class="mb-5 text-2xl">{{ tab.name }}</h2>
            <slot :name="tab.name"></slot>
        </div>
    </div>
</template>
