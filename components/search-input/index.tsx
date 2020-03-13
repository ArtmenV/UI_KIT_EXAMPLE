import * as React from 'react';
import cx from 'classnames';

import './styles.less';

const LENS = require('./lens.svg') as string; // eslint-disable-line

export interface SearchInputProps {
    className: string;
    onChange(value: string): void;
    placeholder: string;
}

const SearchInput = ({
    className,
    onChange,
    placeholder,
}: SearchInputProps): JSX.Element => {
    const [isFocused, setFocused] = React.useState(false);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef(null);
    const handleClickImg = (): void => {
        setFocused(true);

        if (inputRef && inputRef.current) {
            (inputRef.current as any).focus();
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.currentTarget) {
            const { value: newValue } = e.currentTarget;

            onChange(newValue);
            setValue(newValue);
        }
    };
    const handleBlur = (): void => {
        if (!value) {
            setFocused(false);
        }
    };

    return (
        <div className={cx('search-input', className, { 'is-focused': isFocused })}>
            {isFocused && (
                <input
                    className={cx('search-input__input')}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={inputRef}
                    autoFocus
                    placeholder={placeholder}
                />
            )}
            <img
                className="search-input__lens"
                alt=""
                src={LENS}
                onClick={handleClickImg}
            />
        </div>
    );
};

SearchInput.defaultProps = {
    className: '',
};

export default SearchInput;
