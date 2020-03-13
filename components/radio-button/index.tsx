import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface RadioButtonProps {
    onClick(e: React.MouseEvent): void;
    className?: string;
    checked?: boolean;
    children?: React.ReactNode;
    clickableLabel?: boolean;
    disabled?: boolean;
}

const RadioButton = ({
    className,
    onClick,
    checked,
    disabled,
    children,
    clickableLabel,
}: RadioButtonProps): JSX.Element => {
    const handleClick = (e: React.MouseEvent): void => {
        if (!disabled) {
            onClick(e);
        }
    };

    return (
        <div className="radio-btn">
            <button
                className={cx('radio-btn__button', className, { checked, disabled })}
                type="button"
                onClick={handleClick}
            >
                {checked && <span className="radio-btn__check-mark" />}
            </button>
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            {!!children && (
                <label
                    className={cx('radio-btn__label', { clickable: clickableLabel })}
                    onClick={clickableLabel ? handleClick : (): void => undefined}
                >
                    {children}
                </label>
            )}
            {/* eslint-enable jsx-a11y/label-has-associated-control */}
        </div>
    );
};

RadioButton.defaultProps = {
    className: '',
    checked: false,
    clickableLabel: false,
    children: null,
    disabled: false,
};
export default RadioButton;
