import * as React from 'react';

export default (isOpen: boolean): () => void => {
    const [bodyTopPosition, setBodyTopPosition] = React.useState(0);

    return (): void => {
        if (isOpen) {
            const { pageYOffset } = window;

            setBodyTopPosition(pageYOffset);
            document.body.setAttribute('style', `top: -${pageYOffset}px`);
            document.body.classList.add('prevent-scroll');
        } else {
            document.body.classList.remove('prevent-scroll');
            document.body.removeAttribute('style');

            window.scrollTo({
                top: bodyTopPosition,
            });
        }
    };
};
