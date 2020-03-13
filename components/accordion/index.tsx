import * as React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import './styles.less';

export interface AccordionProps {
    className: string;
    id?: string;
    label?: string;
    children: React.ReactNode | React.ReactNode[];
    defaultClosed?: boolean;
}

const Accordion = ({
    className,
    defaultClosed,
    label,
    children,
    id,
}: AccordionProps): JSX.Element => {
    const [opened, setOpened] = React.useState(!defaultClosed);
    const [contentHeight, setContentHeight] = React.useState(defaultClosed ? '0px' : 'auto');
    const [shouldAnimate, setShouldAnimate] = React.useState(false);
    const [isAnimating, setAnimating] = React.useState(false);
    const contentRef = React.useRef(null);
    const handleClickButton = (): void => {
        setOpened(!opened);
        setAnimating(true);
    };
    const handleContentTransitionEnd = (): void => {
        setAnimating(false);
        if (contentHeight !== '0px') {
            setContentHeight('auto');
        }
    };

    useUpdateEffect((): void => {
        setContentHeight(`${!opened ? get(contentRef.current, 'scrollHeight') : 0}px`);
        setTimeout(() => setShouldAnimate(true), 100);
    }, [opened]);

    if (shouldAnimate) {
        setContentHeight(`${(opened && contentRef.current) ? get(contentRef.current, 'scrollHeight') : 0}px`);
        setShouldAnimate(false);
    }

    return (
        <div
            className={cx('accordion', className)}
            id={id}
        >
            <div
                className="accordion__header"
                onClick={handleClickButton}
            >
                <span className="accordion__label">{label}</span>
                <span
                    className={cx('accordion__button', { accordion__opened: opened })}
                />
            </div>
            <div
                className={cx('accordion__content', { accordion__opened: opened && !isAnimating })}
                ref={contentRef}
                style={{
                    height: contentHeight,
                }}
                onTransitionEnd={handleContentTransitionEnd}
            >
                {children}
            </div>
        </div>
    );
};

Accordion.defaultProps = {
    className: '',
};

export default Accordion;
