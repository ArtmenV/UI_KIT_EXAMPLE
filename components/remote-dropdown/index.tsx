import * as React from 'react';

import Dropdown, { DropdownProps, TDropdownOption } from '../dropdown';

export interface RemoteDropdownProps extends Omit<DropdownProps, 'options'> {
    fetchOptions: () => Promise<TDropdownOption[]>;
    onFailFetch?: (errorMessage?: string) => void;
}

const RemoteDropdown = ({
    fetchOptions,
    onFailFetch,
    ...restProps
}: RemoteDropdownProps): JSX.Element => {
    const [remoteOptions, setRemoteOptions] = React.useState<TDropdownOption[]>([]);
    const [isLoading, setLoading] = React.useState(true);
    const [isErrorLoading, setErrorLoading] = React.useState(false);

    React.useEffect(() => {
        fetchOptions().then((fetchedOptions) => {
            setRemoteOptions(fetchedOptions);
            setLoading(false);
        }, (error) => {
            if (onFailFetch) {
                onFailFetch(error.message);
            }
            setLoading(false);
            setErrorLoading(true);
        });
    }, []);

    return (
        <Dropdown
            options={remoteOptions}
            isLoadingOptions={isLoading}
            isErrorLoadingOptions={isErrorLoading}
            {...restProps}
        />
    );
};

RemoteDropdown.defaultProps = {
    className: '',
};

export default RemoteDropdown;
