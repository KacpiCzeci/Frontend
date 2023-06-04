<script>
    import { filter, dones } from '../store/store.js';
    import Element from './Element.svelte';

    var donesValues;
    dones.subscribe(value => {
        donesValues = value;
    });

    var filterValue;
    filter.subscribe(value => {
        filterValue = value;
    });

</script>

<div class="grid grid-cols-1 mx-10 my-6">
    {#each donesValues.filter(item => item.hasOwnProperty('text') && item.text.includes(filterValue)) as done }
        <Element todo={done}/>
    {/each}
</div>