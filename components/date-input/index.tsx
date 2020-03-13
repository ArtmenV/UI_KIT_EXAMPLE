import * as React from 'react';
import cx from 'classnames';
import DatePicker from 'react-datepicker';
import FormField, { FormFieldOwnProps } from '../form-field';

import './styles.less';

export interface DateInputProps extends FormFieldOwnProps {
    onChange?(value: string): void;
    placeholder: string;
    disabled?: boolean;
    value: string;
    todayLabel?: string;
    locale?: string | Locale;
}

const DateInput = ({
    onChange,
    placeholder,
    disabled,
    value,
    todayLabel,
    locale,
    ...formFieldProps
}: DateInputProps): JSX.Element => {
    const handleChange = (date: Date | null): void => {
        if (onChange && date) {
            onChange(date.toLocaleString());
        }
    };

    return (
        <FormField {...formFieldProps}>
            <DatePicker
                selected={value ? new Date(value) : undefined}
                onChange={handleChange}
                todayButton={todayLabel}
                className={cx('form-shape date-input', { disabled })}
                placeholderText={placeholder}
                locale={locale}
                disabled={disabled}
            />
        </FormField>
    );
};

DateInput.defaultProps = {
    className: '',
    disabled: false,
    locale: 'en-GB',
};

export default DateInput;
