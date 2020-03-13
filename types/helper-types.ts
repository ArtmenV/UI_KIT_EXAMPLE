export type TPayloadAction<T, P> = {
    type: T;
    payload: P;
}

export type TPlainAction<T> = {
    type: T;
};

export type TFailedAction<T, E = TNetworkError> = {
    type: T;
    errors: E[];
};

export type TNetworkError = {
    code: string;
    message: string;
};
