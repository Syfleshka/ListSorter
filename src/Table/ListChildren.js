function ListChildren(props) {
    return <li className={`data-list-parent-list__children`}>{props.item.name}</li>;
}

export default ListChildren;
