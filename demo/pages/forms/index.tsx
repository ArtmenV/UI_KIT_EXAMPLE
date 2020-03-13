import * as React from 'react';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ru from 'date-fns/locale/ru';

import Input from 'components/input';
import Textarea from 'components/textarea';
import Shape from 'components/shape';
import Dropdown, { TDropdownOptionValue } from 'components/dropdown';
import RemoteDropdown from 'components/remote-dropdown';
import Button from 'components/button';
import PageTitle from 'components/page-title';
import DateInput from 'components/date-input';
import useForceUpdate from 'hooks/use-force-update';

import fetchRemoteOptions from './fetch-remote-options';
import './styles.less';

export interface FormsPageProps {
    className: string;
}

type FormData = {
    input1: string;
    input2: string;
    input3: string;
    comments: string;
    dropdown: string | number;
    dropdown2: string | number;
    date: string;
}

const FormsPage = ({
    className,
}: FormsPageProps): JSX.Element => {
    const {
        register,
        handleSubmit,
        errors,
        setValue,
        clearError,
        getValues,
    } = useForm<FormData>({
        // defaultValues: {
        //     date: new Date().toLocaleString(),
        // },
    });
    const onSubmit = (data: any): void => { console.log(data); }; // eslint-disable-line no-console
    const { t } = useTranslation();
    const [update] = useForceUpdate();
    React.useEffect(() => {
        register({ name: 'dropdown', type: 'custom' }, { required: true });
        register({ name: 'dropdown2', type: 'custom' }, { required: true });
        register({ name: 'date', type: 'custom' }, { required: true });
        update();
    }, []);

    return (
        <div className={cx('container', className)}>
            <PageTitle>
                {t('formsPage.title')}
            </PageTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Shape className="form-page__shape">
                    <div>
                        <Input
                            label="An required input"
                            placeholder="enter value"
                            errorMessage={errors.input1 && 'Заполните поле input1'}
                            isRequired
                            name="input1"
                            inputRef={register({ required: true })}
                            id="test-input"
                            inline
                        />
                        <Input
                            label="The disabled input"
                            disabled
                            placeholder="enter value"
                            name="lastName"
                            inputRef={register({ required: true })}
                            id="test-input-disabled"
                            inline
                        />
                    </div>
                    <Input
                        label="An input with inline label"
                        isRequired
                        errorMessage={errors.input2 && 'Заполните поле input2'}
                        inlineLabel
                        placeholder="enter value"
                        name="input2"
                        inputRef={register({ required: true })}
                        id="test-input2"
                    />
                    <Input
                        label="An input with inline label fixed length"
                        labelWidth="300px"
                        isRequired
                        inlineLabel
                        placeholder="enter value"
                        name="input3"
                        errorMessage={errors.input3 && 'Заполните поле input3'}
                        inputRef={register({ required: true })}
                        id="test-input3"
                    />

                    <DateInput
                        label="A Date input"
                        placeholder="Enter date"
                        errorMessage={errors.date && 'Fill the date field'}
                        isRequired
                        id="date-test"
                        value={getValues().date}
                        onChange={(dateValue: string): void => {
                            setValue('date', dateValue);
                            clearError('date');
                        }}
                        todayLabel={t('formsPage.today')}
                        locale={ru}
                    />
                    <DateInput
                        label="A disabled Date input"
                        placeholder="Enter date"
                        errorMessage={errors.date && 'Fill the date field'}
                        isRequired
                        disabled
                        id="date2-test"
                        value={getValues().date}
                        onChange={(dateValue: string): void => {
                            setValue('date', dateValue);
                            clearError('date');
                        }}
                        todayLabel={t('formsPage.today')}
                        locale={ru}
                    />
                    <Textarea
                        label="A textarea"
                        onChange={(): void => undefined}
                        placeholder="enter text"
                        errorMessage={errors.comments && 'Заполните комментарий'}
                        isRequired
                        name="comments"
                        inputRef={register({ required: true })}
                        id="test2"
                        rows={3}
                    />
                    <Dropdown
                        label="A dropdown"
                        onSelect={(option: TDropdownOptionValue): void => {
                            setValue('dropdown', option);
                            clearError('dropdown');
                        }}
                        options={[{ value: '1', label: 'one' }, { value: '2', label: 'two' }]}
                        placeholder="Select option"
                        errorMessage={errors.dropdown && 'Заполните дропдаун'}
                        isRequired
                        key="one"
                    />
                    <RemoteDropdown
                        className="another-dropdown"
                        label="Another dropdown"
                        inlineLabel
                        childrenWidth="150px"
                        onSelect={(option): void => {
                            setValue('dropdown2', option);
                            clearError('dropdown2');
                        }}
                        placeholder="Select option"
                        errorMessage={errors.dropdown2 && 'Заполните дропдаун'}
                        isRequired
                        fetchOptions={fetchRemoteOptions}
                        key="two"
                        errorLoadingMessage="Sorry we failed to load options"
                        defaultOptionValue={-1}
                    />
                </Shape>
                <Button
                    filled
                    type="submit"
                    onClick={(): void => undefined}
                >
                    {t('save')}
                </Button>
            </form>
        </div>
    );
};

FormsPage.defaultProps = {
    className: '',
};

export default FormsPage;
