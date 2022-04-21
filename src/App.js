import './App.scss';
import {List} from "./Table/List";
import {useEffect, useState} from "react";

const App = () => {
    const [status, setStatus] = useState({
        isLoading: true,
        requestFailed: false,
        error: ''
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
                    setStatus({...status, requestFailed: true})
                }
            })
            .then((data) => {
                setStatus({...status, isLoading: false})
                setTableData([...data])
            })
            .catch((error) => {
                setStatus({...status, requestFailed: true, error})
            })

    }, [status, tableData])

    return (
        <>
            <h3 className={`header_center`}>Flat Array of objects to List sorter</h3>
            {
                status.isLoading ?
                    <div className="data-loading">
                        <h4 className={`header_center loading`}> Loading... </h4>
                    </div>:
                    tableData ?
                        <List data={tableData}/> :
                        <p>Something went wrong: {status.error}</p>
            }
        </>
    );
}
export default App;