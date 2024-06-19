import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const VERSIONING_HEADER = "x-api-version";
const CURRENT_VERSION = "1.0";
type Version = string;

export default abstract class BaseService {
  private cancelToken = axios.CancelToken;

  protected async get<TResponse>(
    url: string,
    params?: DynamicObject,
    cancellation?: Dynamic,
    version: Version = CURRENT_VERSION
  ) {
    const config = this.buildRequestConfig(version, params, cancellation);
    const response = await axios.get<
      Dynamic,
      AxiosResponse<TResponse, Dynamic>
    >(url, config);
    return response?.data;
  }

  protected post<TRequest, TResponse>(
    url: string,
    payload: TRequest,
    params?: DynamicObject,
    cancellation?: Dynamic,
    version?: Version
  ): Promise<TResponse>;

  // protected post<TResponse>(
  //   url: string,
  //   payload?: DynamicObject,
  //   params?: DynamicObject,
  //   cancellation?: Dynamic,
  //   version?: Version
  // ): Promise<TResponse>;

  protected async post<TRequest, TResponse>(
    url: string,
    payload: TRequest | DynamicObject,
    params?: DynamicObject,
    cancellation?: Dynamic,
    version?: Version
  ) {
    const config = this.buildRequestConfig(version, params, cancellation);
    const response = await axios.post<
      TRequest,
      AxiosResponse<TResponse, Dynamic>
    >(url, payload, config);
    return response?.data;
  }

  protected put<TRequest, TResponse>(
    url: string,
    payload: TRequest,
    params?: DynamicObject,
    version?: Version
  ): Promise<TResponse>;

  protected put<TResponse>(
    url: string,
    payload?: DynamicObject,
    params?: DynamicObject,
    version?: Version
  ): Promise<TResponse>;

  protected async put<TRequest, TResponse>(
    url: string,
    payload?: TRequest | DynamicObject,
    params?: DynamicObject,
    version?: Version
  ) {
    const config = this.buildRequestConfig(version, params);
    const response = await axios.put<
      TRequest,
      AxiosResponse<TResponse, Dynamic>
    >(url, payload, config);
    return response?.data;
  }

  protected async delete<TResponse>(
    url: string,
    params?: DynamicObject,
    version: Version = CURRENT_VERSION
  ) {
    const config = this.buildRequestConfig(version, params);

    const response = await axios.delete<AxiosResponse<TResponse, Dynamic>>(
      url,
      config
    );
    return response?.data;
  }

  protected patch<TRequest, TResponse>(
    url: string,
    payload: TRequest,
    params?: DynamicObject,
    version?: Version
  ): Promise<TResponse>;

  protected patch<TResponse>(
    url: string,
    payload?: DynamicObject,
    params?: DynamicObject,
    version?: Version
  ): Promise<TResponse>;

  protected async patch<TRequest, TResponse>(
    url: string,
    payload: TRequest | DynamicObject,
    params?: DynamicObject,
    version: Version = CURRENT_VERSION
  ) {
    const config = this.buildRequestConfig(version, params);

    const response = await axios.patch<
      TRequest,
      AxiosResponse<TResponse, Dynamic>
    >(url, payload, config);
    return response?.data;
  }

  private buildRequestConfig = (
    version?: Version,
    params?: DynamicObject,
    cancellation?: Dynamic
  ) => {
    const config: AxiosRequestConfig = {
      params: { ...params },
      headers: {
        [VERSIONING_HEADER]: version || CURRENT_VERSION,
        "Cache-Control": "no-store",
      },
    };

    if (cancellation) {
      config.cancelToken = this.createCancelToken(cancellation);
    }

    return config;
  };

  createCancelToken(executor: Dynamic) {
    return executor
      ? new this.cancelToken(executor)
      : this.cancelToken.source().token;
  }
}
