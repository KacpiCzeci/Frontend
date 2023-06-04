<script>
    import { activeTab } from "../store/store";
    import TodoTab from "./TodoTab.svelte";
    import DoneTab from "./DoneTab.svelte";

    var tabConfig = [
        { id: 1, label:"To do", tab: TodoTab },
        { id: 2, label:"Done", tab: DoneTab }
    ];

    var activeTabValue;
    activeTab.subscribe(value => {
        activeTabValue = value;
    });

    let setActiveTab = (tab) => {
        console.log(tab);
        activeTab.set(tab);
    };

</script>

<div class="bg-white">
    <div class="sticky top-[70px] z-50 bg-white border-b border-teal-500">
        <ul class="flex flex-row flex-nowrap -mb-px text-sm font-medium text-center text-teal-500">
            {#each tabConfig as currentTab }
                <li class="w-full mr-2">
                    <button on:click={() => setActiveTab(currentTab.id)} class="{activeTabValue === currentTab.id ? 'active ' : ''}flex w-full justify-center p-4 border-b-4 border-transparent rounded-t-lg hover:text-teal-300">
                        { currentTab.label }
                    </button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="w-full">
        {#each tabConfig as currentTab }
            {#if currentTab.id === activeTabValue }
                <svelte:component this={currentTab.tab}/>
            {/if}
        {/each}
    </div>
</div>

<style>
    .active {
        @apply border-teal-500;
    }
</style>