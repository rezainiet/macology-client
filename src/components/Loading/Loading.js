import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                </div>
            </div>
        </div>
    );
};

export default Loading;