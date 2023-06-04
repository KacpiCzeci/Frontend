<script>
    import { dones } from '../store/store.js';
    import Element from './Element.svelte';

    var donesValues;
    dones.subscribe(value => {
        donesValues = value;
    });

</script>

<div class="grid grid-cols-1 mx-10 my-6">
    {#each donesValues as done }
        <Element todo={done}/>
    {/each}
</div>