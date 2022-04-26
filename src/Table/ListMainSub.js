import ListChildren from './ListChildren';
import { useState } from 'react';

function ListMainSub(props) {
    const [active, setActive] = useState(false);
    return (
        <li className={`data-list__parent`}>
            <h5 className={`data-list-parent__header`} onClick={() => setActive(!active)}>
                {props.header}
            </h5>
            <ul className={`data-list-parent__list${active ? ` active` : ` hidden`}`}>
                {props.items.map((item, id) => (
                    <ListChildren key={id} item={item} />
                ))}
            </ul>
        </li>
    );
}

export default ListMainSub;
