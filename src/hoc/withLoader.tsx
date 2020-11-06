import React from 'react';
const WithLoading = (Component) => {
    return ({ isLoading, ...props }) => {
        if (!isLoading) return <Component {...props} />;
        return <p>Hold on, fetching data might take some time.</p>;
    };
};
export default WithLoading;
