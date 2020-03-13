import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface PageTitleProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}

const PageTitle = ({
    className,
    children,
}: PageTitleProps): JSX.Element => (
    <h1 className={cx('page-title', className)}>
        {children}
    </h1>
);

PageTitle.defaultProps = {
    className: '',
};

export default PageTitle;
