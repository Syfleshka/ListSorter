import './App.scss';
import {List} from "./Table/List";
import {useEffect, useState} from "react";
import Error from "./Error";

const App = () => {
    const [status, setStatus] = useState({
        isLoading: true,
        requestFailed: false,
        error: 'no'
    });
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                access_token: 'scug1ftyyhyixphofk0b2froi6ptbj7ap1e4rzql',
            })
        };

        fetch(`https://api.json-generator.com/templates/JzpglhdZJjBU/data`, requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 408) {
                    setStatus(prevState => ({...prevState, requestFailed: true}))
                } else if (response.status === 429) {
                    setStatus(prevState => ({...prevState, requestFailed: true}))
                }
            })
            .then((data) => {
                setStatus(prevState => ({...prevState, isLoading: false}))
                setTableData([...data])
            })
            .catch((error) => {
                setStatus(prevState => ({...prevState, requestFailed: true, error: error}))
            })
    }, [])
    return (
        <>
            <h3 className={`header_center`}>Flat Array of objects to List sorter</h3>
            {status.isLoading ?
                <div className="data-loading">
                    <h4 className={`header_center loading`}> Loading... </h4>
                </div> : ''}
            {tableData.length ?
                <List data={tableData}/> : ''}
            {status.requestFailed ?
                <Error error={status.error}/> : ''}
        </>
    );
}
export default App;