import * as React from 'react';

export default (): [() => void, number] => {
    const [hash, setHash] = React.useState(0);
    const update = React.useCallback(() => {
        setHash(new Date().getTime());
    }, []);

    return [update, hash];
};
