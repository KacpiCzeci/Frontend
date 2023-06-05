import AddTodo from "./AddTodo";

export default function Navbar() {

    return(
        <nav className="sticky top-0 z-50 border-gray-200 bg-teal-500">
            <div className="flex flex-nowrap items-center justify-between p-4">
                <div className="flex items-center">
                    <img src="./icon.svg" className="h-8 mr-3" alt="ToDo Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Todo List</span>
                </div>
                <div className="flex">
                    <AddTodo/>
                </div>
            </div>
        </nav>
    );
}