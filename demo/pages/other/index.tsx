import * as React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';


import Shape from 'components/shape';
import Accordion from 'components/accordion';
import Button from 'components/button';
import PageTitle from 'components/page-title';
import Modal from 'components/modal';
import Table from 'components/table';
import Checkbox from 'components/checkbox';
import DropDown from 'components/dropdown';

import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
} from 'components/tabs';

import './styles.less';

export interface OtherPageProps {
    className: string;
}

const OtherPage = ({
    className,
}: OtherPageProps): JSX.Element => {
    const { t } = useTranslation();
    const [isModalOpened, setModalOpened] = React.useState(false);
    const [isTableBordered, setTableBordered] = React.useState(false);
    const [isCheckedTableBox, setCheckedTableBox] = React.useState(true);
    const handleButtonClick = (): void => {
        setModalOpened(true);
    };
    const handleCloseModal = (): void => {
        setModalOpened(false);
    };

    return (
        <div className={cx('container', className)}>
            <PageTitle>
                {t('otherPage.title')}
            </PageTitle>
            <Shape className="other-shape">
                <Accordion label="An accordion">
                    <DropDown
                        className="another-dropdown"
                        label="Another dropdown"
                        inlineLabel
                        childrenWidth="150px"
                        onSelect={(): void => undefined}
                        options={[{ value: '1', label: 'one' }, { value: '2', label: 'this is very very long ellipsis test label' }]}
                        placeholder="Select option"
                        key="two"
                    />
                </Accordion>
            </Shape>
            <Shape className="other-shape">
                <Accordion
                    label="The default-closed accordion"
                    defaultClosed
                >
                    Some content Here
                </Accordion>
            </Shape>
            <Tabs className="other-shape react-tabs">
                <TabList>
                    <Tab>Tab title 1</Tab>
                    <Tab>Tab title 2</Tab>
                </TabList>
                <TabPanel>
                    <h2>Tab content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Tab content 2</h2>
                </TabPanel>
            </Tabs>
            <Button
                filled
                onClick={handleButtonClick}
                className="other-shape"
            >
                Open modal window
            </Button>
            <Modal
                isOpen={isModalOpened}
                onClose={handleCloseModal}
                title="The modal title"
                heightPosition="center"
            >
                {
                    Array.from({ length: 100 }).map(() => (
                        <>
                            The modal Content
                            <br />
                        </>
                    ))
                }
            </Modal>
            <Checkbox
                checked={isTableBordered}
                onChange={setTableBordered}
            >
                Table has addition borders
            </Checkbox>
            <Table
                columns={[
                    {
                        name: 'column1',
                        label: 'column1 label',
                        width: '100x',
                    },
                    {
                        name: 'column2',
                        label: 'column2 label',
                    },
                    {
                        name: 'column3',
                        label: 'column3 label',
                        width: '50px',
                    },
                ]}
                rows={[
                    { column1: 'row1col1', column2: 'row1col2', column3: 'row1col3' },
                    { column1: 'row2col1', column3: 'row2col3', column4: 'asdf' },
                    {
                        column1: 'row3col1',
                        column2: 'row3col2',
                        column3: <Checkbox checked={isCheckedTableBox} onChange={setCheckedTableBox} />,
                    },
                ]}
                hasVerticalBorders={isTableBordered}
                onClickRow={(row, index): void => console.log(row, index)} // eslint-disable-line no-console
            />
        </div>
    );
};

OtherPage.defaultProps = {
    className: '',
};

export default OtherPage;
