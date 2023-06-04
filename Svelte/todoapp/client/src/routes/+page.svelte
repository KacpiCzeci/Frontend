<script>
	import axios from 'axios';
    import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
    import { todos, dones, showAddTodo } from '../store/store.js';
    import Tabs from '../components/Tabs.svelte';
    import AddTodo from '../components/AddTodo.svelte';

	var loading = false;

	onMount(async () => {
		loading = true;
		const { data } = await axios.get('/api/todos');
		todos.set(data.filter((item) => !item.done));
		dones.set(data.filter((item) => item.done));
		loading = false;
        console.log(data);
	});

</script>

<div class="min-w-[440px]">
	<Navbar/>
    <Tabs/>
    {#if $showAddTodo===true}
        <AddTodo/>
    {/if}
</div>
