import * as React from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';

import SearchInput from 'components/search-input';
import UserWidget from 'components/user-widget';
import NavLink from 'components/navlink';

export default (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <header className="main-header container">
            <SearchInput
                className="main-header__search"
                onChange={(): void => undefined}
                placeholder="Поиск пациента"
            />
            <div className="main-header__right">
                <nav className="main-header__nav">
                    <NavLink
                        to="/demo/elements"
                    >
                        {t('elements')}
                    </NavLink>
                    <NavLink
                        to="/demo/forms"
                    >
                        {t('forms')}
                    </NavLink>
                    <NavLink
                        to="/demo/other"
                    >
                        {t('other')}
                    </NavLink>
                </nav>
                <UserWidget
                    user={{
                        username: 'Мотылев А.А.',
                        avatar: 'avatar.webm',
                    }}
                />
            </div>
        </header>
    );
};
