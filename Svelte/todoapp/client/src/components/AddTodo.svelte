<script>
    import axios from 'axios';
    import { updateTodos } from '../store/store.js';

    let valid = true;

    let validateForm = (data) => {
        if(data.name != null && data.name !== '') {
            valid = true;
        }
        else {
            valid = false;
        }
    }

    let addTodo = async (e) => {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        validateForm(data);

        if(valid) {
            await axios.post(`/api/todos`, {
                text: formData.get("name"),
                done: false,
            }).then((response) => {
                updateTodos();
            });
            e.target.reset();
        }
    };
    
</script>

<form on:submit|preventDefault={addTodo} class="relative">
    <input type="text" id="name" name="name" value="" class="{valid ? 'valid' : 'invalid' } block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400" placeholder="Add Todo...">
    <button type="submit" class="absolute inset-y-0 left-0 flex items-center pl-3 hover:brightness-200 hover:scale-110">
        <img src="./add.svg" class="w-5 h-5 text-gray-500" alt="add.svg" />
    </button>
</form>

<style>
    .valid {
        @apply border border-white ;
    }

    .invalid {
        @apply border-2 border-[#db4f4f];
        animation: shake 100ms ease-in-out;
    }

    @keyframes shake{
        0% { transform: translateX(0) }
        25% { transform: translateX(5px) }
        50% { transform: translateX(-5px) }
        75% { transform: translateX(5px) }
        100% { transform: translateX(0) }
    }
</style>