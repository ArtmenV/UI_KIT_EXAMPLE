import * as React from 'react';
import cx from 'classnames';

import preventScroll from '../../hooks/prevent-scroll';
import Shape from '../shape';
import IconButton from '../icon-button';

import './styles.less';

type ModalHeightPositions = 'center' | 'top';

export interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose(): void;
    withoutCloseButton?: boolean;
    closeOnOverlay?: boolean;
    title: string;
    heightPosition?: ModalHeightPositions;
}

const ModalWindow = ({
    isOpen,
    children,
    onClose,
    withoutCloseButton,
    closeOnOverlay,
    title,
    heightPosition,
}: ModalProps): JSX.Element | null => {
    React.useEffect(preventScroll(isOpen), [isOpen]);

    const handleClickOverlay = (): void => {
        if (closeOnOverlay) {
            onClose();
        }
    };

    const stopPropagation = React.useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={cx('modal__overlay', `overlay-${heightPosition}`)}
            onClick={handleClickOverlay}
        >
            <Shape
                className="modal__wrapper"
                onClick={stopPropagation}
            >
                <div className="modal__header">
                    {title}
                </div>
                {!withoutCloseButton && (
                    <IconButton
                        className="modal__close-button"
                        onClick={(): void => onClose()}
                        icon="back-arrow"
                    />
                )}
                <div className="modal__content">
                    {children}
                </div>
            </Shape>
        </div>
    );
};

ModalWindow.defaultProps = {
    withoutCloseButton: false,
    closeOnOverlay: false,
    heightPosition: 'center',
};

export default ModalWindow;
