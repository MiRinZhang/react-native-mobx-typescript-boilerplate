/**
 * 请求通用类
 */
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
    headers: {
        'X-Custom-Header': 'M-NOTE',
    },
});

/**
 * 校验数据是否合格
 * @param response
 * @returns {boolean}
 */
const testSuccess = (response: AxiosResponse) => {
    const { data, status } = response,
        { code = -1 } = data || {};

    return status === 200 && code === 0;
};

interface ResponseType extends AxiosResponse {
    code?: number;
    msg?: string;
}

// 请求拦截
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 拦截返回数据
instance.interceptors.response.use(
    (response: ResponseType): ResponseType => {
        // 校验返回的数据
        if (testSuccess(response)) {
            return { ...response, code: 0 };
        }

        return { ...response, code: 505, msg: 'validate failed' };
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export default instance;
