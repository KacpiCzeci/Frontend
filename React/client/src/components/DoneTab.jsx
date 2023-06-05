import Element from './Element';
import { useSelector } from "react-redux";

export default function DoneTab() {
    const dones = useSelector((state) => state.dones);

    return(
        <div className="grid grid-cols-1 mx-10 my-6">
            {
                dones.map((done, index) => {
                    return <Element key={done._id} todo={done}/>;
                })
            }
        </div>
    );
}