import './Error.scss';
import { useState } from 'react';

function Error(props) {
    const [isClosed, setIsClosed] = useState(false);
    return (
        <>
            {isClosed ? (
                ''
            ) : (
                <div className={`error`}>
                    <p className={`error__text`}>{props.error.toString()}</p>
                    <button className={`error__close`} onClick={() => setIsClosed(true)}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
}

export default Error;
