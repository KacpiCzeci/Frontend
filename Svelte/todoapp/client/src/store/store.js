import { writable } from "svelte/store";
import axios from "axios";

var todos = writable([]);
var dones = writable([]);
var activeTab = writable(1);
var editedTodo = writable('');

let updateTodos = async () => {
    const { data } = await axios.get('/api/todos');
	todos.set(data.filter((item) => !item.done));
	dones.set(data.filter((item) => item.done));
}

export { todos, dones, activeTab, editedTodo, updateTodos };