import * as React from 'react';
import cx from 'classnames';

import FormField, { FormFieldOwnProps } from '../form-field';

export interface InputProps extends FormFieldOwnProps {
    onChange?(value: string): void;
    placeholder: string;
    name: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    disabled?: boolean;
}

const Input = ({
    onChange,
    placeholder,
    name,
    inputRef,
    disabled,
    ...formFieldProps
}: InputProps): JSX.Element => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.currentTarget && onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <FormField {...formFieldProps}>
            <input
                className={cx('form-shape', {
                    'form-shape__error': !!formFieldProps.errorMessage,
                    disabled,
                })}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                ref={inputRef}
                id={`${formFieldProps.id}-native-input`}
                disabled={disabled}
            />
        </FormField>
    );
};

Input.defaultProps = {
    className: '',
    disabled: false,
};

export default Input;
