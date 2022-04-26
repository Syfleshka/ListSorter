import './List.scss';
import ListMain from './ListMain';
import ListOther from './ListOther';

export function List(props) {
    const modifyData = (key, data, mainDataList = []) => {
        let sortedData = {};
        data.forEach((elem) => {
            if (
                (mainDataList.length === 0 && elem[key]) ||
                (mainDataList.length && mainDataList.indexOf(elem[key]) > -1)
            ) {
                if (!sortedData.hasOwnProperty(`main`)) sortedData.main = [];
                let index = sortedData.main.findIndex((innerElem) => innerElem.header === elem[key]);
                if (index === -1) {
                    sortedData.main.push({
                        header: elem[key],
                        items: [elem],
                    });
                } else {
                    sortedData.main[index].items.push(elem);
                }
            } else {
                if (!sortedData.hasOwnProperty(`main`)) sortedData.other = [];
                sortedData.other.push(elem);
            }
        });

        return sortedData;
    };

    const sortedTable = modifyData(`parentID`, props.data);
    console.log(sortedTable);
    return (
        <ul className={`data-list`}>
            {sortedTable.main ? <ListMain main={sortedTable.main} /> : null}
            {sortedTable.other ? <ListOther other={sortedTable.other} /> : null}
        </ul>
    );
}

List.propTypes = {};
