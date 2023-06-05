import store from "./store";
import axios from "axios";


const updateTodos = async () => {
    const { data } = await axios.get('/api/todos');
	store.dispatch({ type: "addTodos", content: data.filter((item) => !item.done) });
	store.dispatch({ type: "addDones", content: data.filter((item) => item.done) });
}

export default updateTodos;