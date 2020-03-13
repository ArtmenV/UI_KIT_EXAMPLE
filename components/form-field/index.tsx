import * as React from 'react';
import cx from 'classnames';

import RequireMark from '../require-mark';
import './styles.less';

export interface FormFieldOwnProps {
    className?: string;
    label?: string;
    errorMessage?: string;
    isRequired?: boolean;
    id?: string;
    inlineLabel?: boolean;
    labelWidth?: string;
    childrenWidth?: string;
    inline?: boolean;
}

export interface FormFieldProps extends FormFieldOwnProps {
    children: React.ReactNode;
}

const FormField = ({
    className,
    children,
    label,
    errorMessage,
    isRequired,
    id,
    inlineLabel,
    labelWidth,
    childrenWidth,
    inline,
}: FormFieldProps): JSX.Element => (
    <div className={cx('form-field', className, { 'is-inline': inline })} id={id}>
        {!!label && (
            <div
                className={cx('form-field__label', { 'is-inline-label': inlineLabel })}
                style={labelWidth ? { width: labelWidth } : undefined}
            >
                {label}
                {isRequired && (
                    <RequireMark />
                )}
            </div>
        )}
        <div
            className={cx('form-field__children', { 'is-inline': inlineLabel })}
            style={childrenWidth ? { width: childrenWidth } : undefined}
        >
            {children}
            {!!errorMessage && (
                <div className="form-field__error">
                    {errorMessage}
                </div>
            )}
        </div>
    </div>
);

FormField.defaultProps = {
    className: '',
};

export default FormField;
