import ListMainSub from "./ListMainSub";
import {useState} from "react";
function ListMain(props) {
    const [active, setActive] = useState(false);
    return <li className={`data-list__parent`}>
        <h4 key={'main'} className={`data-list-parent__header`} onClick={() => setActive(!active)}>Main</h4>
        <ul className={`data-list data-list-parent__list${active ? '' : ' hidden'}`}>
            {props.main.map((elem, id) =>
                <ListMainSub header={elem.header} items={elem.items} key={id} />
            )}
        </ul>
    </li>;
}
export default ListMain;