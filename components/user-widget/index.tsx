import * as React from 'react';
import cx from 'classnames';

import './styles.less';

export interface UserWidgetProps {
    className: string;
    user: {
        username: string;
        avatar: string;
    };
}

const UserWidget = ({
    className,
    user,
}: UserWidgetProps): JSX.Element => (
    <div className={cx('user-widget', className)}>
        <img
            alt=""
            src={user.avatar}
            className="user-widget__avatar"
        />
        <div className="user-widget__name">
            {user.username}
        </div>
        <div className="user-widget__btn">
            {['0', '1', '2'].map((item: string) => (
                <span
                    className="user-widget__bubble"
                    key={item}
                />
            ))}
        </div>
    </div>
);

UserWidget.defaultProps = {
    className: '',
};

export default UserWidget;
