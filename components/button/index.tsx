import * as React from 'react';
import cx from 'classnames';

import './styles.less';

const cssVariables = require('../../assets/css-global-vars');

export interface ButtonProps {
    children: React.ReactNode;
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    disabled?: boolean;
    filled?: boolean;
    className?: string;
    type: 'button' | 'submit' | 'reset';
    color: 'first' | 'second' | 'third';
    id?: string;
}

const colorStyles = {
    first: {
        ['--fill-color' as string]: cssVariables.colorBasicFirst,
        ['--hover-color' as string]: cssVariables.colorBasicFirstHover,
        ['--active-color' as string]: cssVariables.colorBasicFirstActive,
    },
    second: {
        ['--fill-color' as string]: cssVariables.colorBasicSecond,
        ['--hover-color' as string]: cssVariables.colorBasicSecondHover,
        ['--active-color' as string]: cssVariables.colorBasicSecondActive,
    },
    third: {
        ['--fill-color' as string]: cssVariables.colorBasicThird,
        ['--hover-color' as string]: cssVariables.colorBasicThirdHover,
        ['--active-color' as string]: cssVariables.colorBasicThirdActive,
    },
};

const Button = ({
    disabled,
    children,
    className,
    onClick,
    filled,
    type,
    color,
    id,
}: ButtonProps): JSX.Element => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (disabled) {
            return;
        }

        onClick(e);
    };

    return (
        <button
            className={cx('button', className, `btn-${color}`, { disabled, filled })}
            type={type}
            onClick={handleClick}
            style={colorStyles[color]}
            id={id}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    color: 'first',
    disabled: false,
};

export default Button;
