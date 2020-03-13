import { useHistory } from 'react-router-dom';

export interface UseRouteOptions {
    selector: string;
    smooth: boolean;
    headerHeight: number;
}

export default (path: string, options?: UseRouteOptions): () => void => {
    const history = useHistory();
    const {
        selector,
        smooth = false,
        headerHeight = 0,
    } = options || {};

    return (): void => {
        history.push(path);
        setTimeout((): void => {
            let node;
            let scrollTo = 0;

            if (selector) {
                node = document.querySelector(selector);
            }

            if (node) {
                scrollTo = node.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            }

            window.scrollTo({
                top: scrollTo,
                // @ts-ignore:2322
                behavior: smooth ? 'smooth' : 'auto',
            });
        }, 0);
    };
};
