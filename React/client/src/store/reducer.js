const initState = {
    todos: [],
    dones: [],
    activeTab: 1,
    editedTodo: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "addTodos":
            return {
                ...state,
                todos: action.content
            };

        case "addDones":
            return {
                ...state,
                dones: action.content
            };

        case "setActiveTab":
            return {
                ...state,
                activeTab: action.content
            };

        case "setEditedTodo":
            return {
                ...state,
                editedTodo: action.content
            };

        default:
            return {
                ...state
            };
    }
};