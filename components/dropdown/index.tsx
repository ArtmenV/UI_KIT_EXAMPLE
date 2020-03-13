import * as React from 'react';
import cx from 'classnames';

import FormField, { FormFieldOwnProps } from '../form-field';
import RingLoader from '../ring-loader';

import './styles.less';

const ARROW = require('./arrow.svg') as string; // eslint-disable-line

export type TDropdownOptionValue = string | number;

export type TDropdownOption = {
    label: string;
    value: TDropdownOptionValue;
};

export interface DropdownProps extends FormFieldOwnProps {
    onSelect?(option: TDropdownOptionValue): void;
    options: TDropdownOption[];
    placeholder: string;
    isLoadingOptions?: boolean;
    isErrorLoadingOptions?: boolean;
    errorLoadingMessage?: string;
    defaultOptionValue?: TDropdownOptionValue;
}

const Dropdown = ({
    onSelect,
    options,
    placeholder,
    isLoadingOptions,
    isErrorLoadingOptions,
    errorLoadingMessage,
    defaultOptionValue,
    ...formFieldProps
}: DropdownProps): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState<null | TDropdownOption>(null);
    const dropdownRef = React.useRef(null);

    const shouldRenderOptions = !(isLoadingOptions || isErrorLoadingOptions) && isOpen && options && options.length > 0;

    const handleSelect = (option: TDropdownOption): void => {
        setOpen(false);
        setSelectedOption(option);

        if (onSelect) {
            onSelect(option.value);
        }
    };

    const onClickOutsideClose = React.useCallback((event: any): void => {
        const closestDropdown = event.target.closest('.dropdown');

        if (!(dropdownRef.current && closestDropdown && dropdownRef.current === closestDropdown)) {
            setOpen(false);
        }
    }, []);

    const toggle = (): void => {
        setOpen(!isOpen);
    };


    React.useEffect(() => {
        document.body.addEventListener('click', onClickOutsideClose);
        return (): void => {
            document.body.removeEventListener('click', onClickOutsideClose);
        };
    }, []);
    React.useEffect((): void => {
        if (!((options.length > 0) && defaultOptionValue)) {
            return;
        }

        const defaultOption = options.find((optionItem: TDropdownOption) => optionItem.value === defaultOptionValue);
        console.log(1111, defaultOption, options)
        if (defaultOption) {
            setSelectedOption(defaultOption);
        }
    }, [options]);

    return (
        <FormField {...formFieldProps}>
            <div
                className="dropdown"
                ref={dropdownRef}
            >
                <div
                    className={cx('form-shape', {
                        'form-shape__error': !!formFieldProps.errorMessage,
                    })}
                    onClick={toggle}
                >
                    <div className="dropdown__selected">
                        <span className="dropdown__text">{selectedOption ? selectedOption.label : placeholder }</span>
                        <img
                            src={ARROW}
                            alt=""
                            className={cx('dropdown__arrow', { arrow__reversed: isOpen })}
                        />
                    </div>
                </div>
                {shouldRenderOptions && (
                    <div className="dropdown__options">
                        {options.map((option) => (
                            <div
                                className="dropdown__item"
                                onClick={(): void => { handleSelect(option); }}
                                key={option.value}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
                {isOpen && isLoadingOptions && (
                    <div className="dropdown__options dropdown__options--flex">
                        <RingLoader width="40px" />
                    </div>
                )}
                {isOpen && isErrorLoadingOptions && (
                    <div className="dropdown__options">
                        <div className="dropdown__options-error">
                            {errorLoadingMessage}
                        </div>
                    </div>
                )}
            </div>
        </FormField>
    );
};

export default Dropdown;
