import { StatusCodes } from 'http-status-codes';
import { G, requestCreator } from '@siyuan0215/easier-axios-dsl';

const TIMEOUT = {
  DEFAULT: 3 * 60000,
  UPLOADING: 5 * 60000,
};
export const request = requestCreator({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: TIMEOUT.DEFAULT,
  withCredentials: true,
  requestInterceptors: [
    (config) => {
      return {
        ...config,
        timeout: TIMEOUT.UPLOADING,
        headers: {
          ...config.headers,
          authorization: '1',
        },
      };
    },
    (error: any) => Promise.reject(error),
  ],
  responseInterceptors: [
    (response) => {
      const { status } = response;

      if (status === StatusCodes.OK) {
        return response;
      }
      return Promise.reject(response);
    },
    (error: string) => {
      return Promise.reject(error);
    },
  ],
});

export const generatorAPIS = <T extends {}>(apiConfig: T) => G<T>(request, apiConfig);
