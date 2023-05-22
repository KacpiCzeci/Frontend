import { writable } from "svelte/store";

var filter = writable('');
var todos = writable([]);
var dones = writable([]);
var activeTab = writable(1);

export { filter, todos, dones, activeTab };