import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'; // eslint-disable-line import/no-extraneous-dependencies

import queryString from 'query-string';

const API_BASE_URL = 'http://warehouse.dev.biopicmedical.com/warehouseApi/';

class Api {
    instance: AxiosInstance;

    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl,
            withCredentials: false,
            headers: {
                post: { 'Content-Type': 'application/json' },
                put: { 'Content-Type': 'application/json' },
            },
        });
    }

    get<T, R = AxiosResponse<T>>(path: string, query?: object, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.get(`${path}?${queryString.stringify({
            ...query,
        })}`, config);
    }

    post<T, R = AxiosResponse<T>>(path: string, data: object, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.post(path, data, config);
    }
}

export default new Api(API_BASE_URL);
