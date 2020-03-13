import * as React from 'react';
import cx from 'classnames';

import ICONS, { TIconName } from '../../assets/icons';

import './styles.less';

export interface IconButtonProps {
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    className?: string;
    icon: TIconName;
}

const IconButton = ({
    className,
    onClick,
    icon,
}: IconButtonProps): JSX.Element => (
    <button
        className={cx('icon-btn', className)}
        type="button"
        onClick={onClick}
        style={{
            backgroundImage: `url('${ICONS[icon]}')`,
        }}
    />
);

export default IconButton;
