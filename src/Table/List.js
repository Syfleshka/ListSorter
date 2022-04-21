import './List.scss'
import ListMain from "./ListMain";
import ListOther from "./ListOther";
//const _ = require('lodash');

export function List(props) {
    console.log(props)
    const modifyData = (key, data, mainDataList = []) => {
        let sortedData = {}

        data.forEach(elem => {
            if ((mainDataList.length === 0 && elem[key])
                || (mainDataList.length && mainDataList.indexOf(elem[key]) > -1)) {
                if (!sortedData.hasOwnProperty('main')) sortedData.main = []
                let index = sortedData.main.findIndex(innerElem => innerElem.header === elem[key])
                if (index === -1) {
                    sortedData.main.push({
                        header: elem[key],
                        items: [elem]
                    })
                } else {
                    sortedData.main[index].items.push(elem)
                }
            } else {
                if (!sortedData.hasOwnProperty('main')) sortedData.other = []
                sortedData.other.push(elem)
            }
        })

        return sortedData
    }

    /*
    const makePartition = (data, mainDataList = []) => {
        const [main, other] = _.partition(data, (item) =>
            mainDataList.length ? mainDataList.includes(item.parentID) : !!item.parentID
        );

        return {main, other};
    };

    const groupByParentId = (main) => {
        const groups = _.groupBy(main, "parentID");

        return _.map(groups, (value, key) => ({
            header: key,
            items: value
        }));
    };

    const makeData = (data, mainDataList = []) => {
        const {main, other} = makePartition(data, mainDataList);
        const groupedMain = groupByParentId(main);

        return {main: groupedMain, other};
    };
    */
    const sortedTable = modifyData('parentID', props.data)
    console.log(sortedTable)
    return (
        <ul className={`data-list`}>
            {sortedTable.main ? (
                <ListMain main={sortedTable.main} />
            ) : ''}
            {sortedTable.other ? (
                <ListOther other={sortedTable.other} />
            ) : ''}
        </ul>
    );

}

List.propTypes = {};