import * as React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import Button from 'components/button';
import PageTitle from 'components/page-title';
import CountButton from 'components/count-button';
import Checkbox from 'components/checkbox';
import RadioButton from 'components/radio-button';
import RingLoader from 'components/ring-loader';

import './styles.less';

export interface ElementsPageProps {
    className: string;
}

const ElementsPage = ({
    className,
}: ElementsPageProps): JSX.Element => {
    const { t } = useTranslation();
    const [checked, setChecked] = React.useState(true);
    const [selectedRadio, setSelectedRadio] = React.useState(0);
    const handleButtonClick = (): void => undefined;

    return (
        <div className={cx('container', className)}>
            <PageTitle>
                {t('elementsPage.title')}
            </PageTitle>
            <div className="wrapper">
                <Button filled onClick={handleButtonClick}>test</Button>
                <Button
                    filled
                    color="second"
                    onClick={handleButtonClick}
                >
                        test
                </Button>
                <Button
                    color="third"
                    onClick={handleButtonClick}
                >
                    test
                </Button>
                <Button disabled filled onClick={handleButtonClick}>test</Button>
            </div>
            <div className="wrapper short">
                <CountButton type="plus" onClick={handleButtonClick} />
                <CountButton type="minus" onClick={handleButtonClick} />
            </div>
            <div className="wrapper vertical">
                <Checkbox
                    checked={checked}
                    onChange={(): void => setChecked(!checked)}
                >
                    non-clickable
                </Checkbox>
                <Checkbox
                    checked={checked}
                    onChange={(): void => setChecked(!checked)}
                    clickableLabel
                >
                    clickable
                </Checkbox>
                <Checkbox
                    checked={checked}
                    disabled
                    onChange={(): void => setChecked(!checked)}
                />
            </div>
            <div className="wrapper vertical">
                <RadioButton
                    checked={selectedRadio === 1}
                    onClick={(): void => setSelectedRadio(1)}
                >
                    radio1 (non-clickable)
                </RadioButton>
                <RadioButton
                    checked={selectedRadio === 2}
                    clickableLabel
                    onClick={(): void => setSelectedRadio(2)}
                >
                    radio2 (clickable)
                </RadioButton>
                <RadioButton
                    checked={selectedRadio === 0}
                    onClick={(): void => setChecked(!checked)}
                    disabled
                />
            </div>
            <RingLoader width="100px" />
        </div>
    );
};

ElementsPage.defaultProps = {
    className: '',
};

export default ElementsPage;
