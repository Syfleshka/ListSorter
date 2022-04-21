import ListChildren from "./ListChildren";
import {useState} from "react";

function ListMainSub(props) {
    const [active, setActive] = useState(false);
    return <li>
        <h5 className={`data-list-parent__header`} onClick={() => setActive(!active)}>{props.header}</h5>
        <ul className={`data-list data-list-parent__list${active ? '' : ' hidden'}`}>
            {props.items.map((item, id) =>
                <ListChildren key={id} item={item} />
            )}
        </ul>
    </li>;
}
export default ListMainSub;