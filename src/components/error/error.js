import React from 'react';

const Error = ({ message }) => {
    return <div className="error">{message ? message : 'ОШИБКА'}</div>
}

export default Error;