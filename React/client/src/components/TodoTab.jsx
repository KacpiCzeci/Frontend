import Element from './Element';
import { useSelector } from "react-redux";

export default function TodoTab() {
    const todos = useSelector((state) => state.todos);

    return(
        <div className="grid grid-cols-1 mx-10 my-6">
            {
                todos.map((todo, index) => {
                    return <Element key={todo._id} todo={todo}/>;
                })
            }
        </div>
    );
}