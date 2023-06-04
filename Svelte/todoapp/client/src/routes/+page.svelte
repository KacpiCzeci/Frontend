<script>
	import axios from 'axios';
    import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
    import { todos, dones } from '../store/store.js';
    import Tabs from '../components/Tabs.svelte';

	var loading = false;

	onMount(async () => {
		loading = true;
		const { data } = await axios.get('/api/todos');
		todos.set(data.filter((item) => !item.done));
		dones.set(data.filter((item) => item.done));
		loading = false;
	});

</script>

<div class="min-w-[440px]">
	<Navbar/>
    <Tabs/>
</div>
