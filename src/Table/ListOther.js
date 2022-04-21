import ListChildren from "./ListChildren";
import {useState} from "react";

function ListOther(props) {
    const [active, setActive] = useState(false);
    return <li className={`data-list__parent`}>
        <h4 key={'other'} className={`data-list-parent__header`} onClick={() => setActive(!active)}>Other</h4>
        <ul className={`data-list data-list-parent__list${active ? '' : ' hidden'}`}>
            {props.other.map((item, id) =>
                <ListChildren key={id} item={item} />
            )}
        </ul>
    </li>
}
export default ListOther;