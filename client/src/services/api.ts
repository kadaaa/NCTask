import localConfig from '../env/config.local';
import prodConfig from '../env/config.prod';

const environment = process.env.NODE_ENV;
const BASE_URL = environment === 'development' ? localConfig.BASE_URL : prodConfig.BASE_URL;

export const apiCall = async (url: string, query: { [key: string]: any } = {}, config: any = {}): Promise<any> => {
    // build the query string
    const queryArray = Object.keys(query)
        .filter(
            (key: string) =>
            query[key] !== undefined && query[key] !== null
        )
        .map(
            (key: string) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
                query[key].toString()
            )}`
        );
    const queryString = queryArray.length <= 0 ? "" : "?" + queryArray.join("&");
    const requestUrl = `${BASE_URL}${url}${queryString}`;
    try {
        const response = await fetch(requestUrl, config);
        return response.json();
    } catch (e) {
        throw e;
    }
}

/**
 * Make a GET request to the API
 * @param url The API endpoint
 * @param query GET parameters to be posted to the endpoint, as an object
 * @param config Additional fetch configuration
 */
export const apiGet = (url: string, query?: { [key: string]: any }, config: any = {}): Promise<any> => {
    return apiCall(url, query, { method: 'GET', ...config });
}
