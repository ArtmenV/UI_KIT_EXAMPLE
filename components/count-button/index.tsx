import * as React from 'react';
import cx from 'classnames';

import './styles.less';

/* eslint-disable global-require */
const ICONS = {
    plus: require('./minus.svg') as string,
    minus: require('./plus.svg') as string,
};
/* eslint-enable global-require */

export interface CountButtonProps {
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    className?: string;
    type: 'plus' | 'minus';
}

const CountButton = ({
    className,
    onClick,
    type,
}: CountButtonProps): JSX.Element => (
    <button
        className={cx('count-btn', className)}
        type="button"
        onClick={onClick}
    >
        <img
            src={ICONS[type]}
            alt=""
            className="count-btn__icon"
        />
    </button>
);

export default CountButton;
