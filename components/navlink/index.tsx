import * as React from 'react';
import cx from 'classnames';

import useRoute, { UseRouteOptions } from '../../hooks/use-route';

import './styles.less';

export interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    onClick?(e: React.MouseEvent): void;
    options?: UseRouteOptions;
}

export default ({
    to,
    options,
    className,
    children,
    onClick,
}: LinkProps): JSX.Element => {
    const route = useRoute(to, options);
    const hanldeClick = (e: React.MouseEvent): void => {
        e.preventDefault();

        if (onClick) {
            onClick(e);
        }

        route();
    };

    return (
        <a
            className={cx('nav-link', className)}
            href={to}
            onClick={hanldeClick}
        >
            {children}
        </a>
    );
};
