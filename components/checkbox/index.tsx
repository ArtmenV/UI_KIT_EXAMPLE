import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface CheckboxProps {
    className?: string;
    checked: boolean;
    children?: React.ReactNode;
    onChange(value: boolean): void;
    clickableLabel?: boolean;
    disabled?: boolean;
}

const Checkbox = ({
    checked,
    onChange,
    disabled,
    className,
    children,
    clickableLabel,
}: CheckboxProps): JSX.Element => {
    const input = React.useRef(null);

    const handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();

        if (disabled) {
            return;
        }

        if (!checked) {
            (input.current as any).setAttribute('checked', 'checked');
        } else {
            (input.current as any).removeAttribute('checked');
        }

        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <div className={cx('checkbox-wrapper', className)}>
            <div className={cx('checkbox', { checked, 'with-label': !!children, disabled })} onClick={handleClick}>
                <input
                    ref={input}
                    className="checkbox__input"
                    type="checkbox"
                    tabIndex={0}
                    readOnly
                />
            </div>
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            {!!children && (
                <label
                    className={cx('checkbox__label', { clickable: clickableLabel })}
                    onClick={clickableLabel ? handleClick : (): void => undefined}
                >
                    {children}
                </label>
            )}
            {/* eslint-enable jsx-a11y/label-has-associated-control */}
        </div>
    );
};

Checkbox.defaultProps = {
    className: '',
    checked: false,
    clickableLabel: false,
    children: null,
    disabled: false,
};

export default Checkbox;
