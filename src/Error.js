import './Error.scss';
import {useState} from "react";
function Error(props) {
    const [close, setClose] = useState(false)
    return <>
        {close ? '' :
            <div className={`error`}>
                <p className={`error__text`}>{props.error.toString()}</p>
                <button className={`error__close`} onClick={() => setClose(true)}>Close</button>
            </div>
        }
    </>;
}
export default Error;