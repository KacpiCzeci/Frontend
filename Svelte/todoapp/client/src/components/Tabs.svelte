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
    }

</script>

<div>
    <div>
        <ul class="flex flex-row flex-nowrap -mb-px text-sm font-medium text-center text-teal-500">
            {#each tabConfig as currentTab }
                <li class="w-full mr-2">
                    <button on:click={() => setActiveTab(currentTab.id)} class="{activeTabValue === currentTab.id ? 'active ' : ''}flex w-full justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-teal-300 hover:border-teal-300">
                        { currentTab.label }
                    </button>
                </li>
            {/each}
            <!-- <li class="mr-2">
                <span class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    To Do
                </span>
            </li>
            <li class="mr-2">
                <span clacss="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group">
                    Done
                </span>
            </li> -->
        </ul>
    </div>
    {#each tabConfig as currentTab }
        {#if currentTab.id === activeTabValue }
            <svelte:component this={currentTab.tab}/>
        {/if}
    {/each}
</div>

<style>
    .active {
        @apply border-teal-500;
    }
</style>