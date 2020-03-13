import * as React from 'react';
import cx from 'classnames';

import FormField, { FormFieldOwnProps } from '../form-field';

export interface TextareaProps extends FormFieldOwnProps {
    onChange?(value: string): void;
    placeholder: string;
    name: string;
    inputRef: React.LegacyRef<HTMLTextAreaElement>;
    rows?: number;
    maxLength?: number;
}

const Textarea = ({
    onChange,
    placeholder,
    name,
    inputRef,
    rows,
    maxLength,
    ...formFieldProps
}: TextareaProps): JSX.Element => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget && onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <FormField {...formFieldProps}>
            <textarea
                className={cx('form-shape textarea', { 'form-shape__error': !!formFieldProps.errorMessage })}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                ref={inputRef}
                id={`${formFieldProps.id}-native-textarea`}
                rows={rows}
                maxLength={maxLength}
            />
        </FormField>
    );
};

Textarea.defaultProps = {
    className: '',
    rows: 1,
    maxLength: 99999,
};

export default Textarea;
