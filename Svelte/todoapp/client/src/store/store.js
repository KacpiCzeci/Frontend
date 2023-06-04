import { writable } from "svelte/store";
import axios from "axios";

var filter = writable('');
var todos = writable([]);
var dones = writable([]);
var activeTab = writable(1);
var showAddTodo = writable(false);
var editedTodo = writable('');

let updateTodos = async () => {
    const { data } = await axios.get('/api/todos');
	todos.set(data.filter((item) => !item.done));
	dones.set(data.filter((item) => item.done));
}

export { filter, todos, dones, activeTab, showAddTodo, editedTodo, updateTodos };