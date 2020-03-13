import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface ShapeProps {
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode | React.ReactNode[];
}

const Shape = ({
    className,
    children,
    onClick,
}: ShapeProps): JSX.Element => (
    <div
        className={cx('shape', className)}
        onClick={onClick}
    >
        {children}
    </div>
);

Shape.defaultProps = {
    className: '',
};

export default Shape;
