import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface RingLoaderProps {
    className?: string;
    width?: string;
}

const RingLoader = ({
    className,
    width,
}: RingLoaderProps): JSX.Element => (
    <div
        className={cx('lds-ring', className)}
        style={{
            width,
            height: width,
        }}
    >
        <div />
        <div />
        <div />
        <div />
    </div>
);

RingLoader.defaultProps = {
    className: '',
    width: '40px',
};

export default RingLoader;
