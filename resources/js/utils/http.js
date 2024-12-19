// Importa Axios
import axios from 'axios';

class ApiClient {
    constructor(baseURL, defaultHeaders = {}) {
        this.client = axios.create({
            baseURL,
            headers: defaultHeaders,
        });

        this.client.interceptors.response.use(
            (response) => response.data, // Retorna solo los datos
            (error) => {
                // Manejo de errores
                const errorResponse = error.response || {};
                return Promise.reject({
                    status: errorResponse.status || 500,
                    message: errorResponse.data?.message || 'Error xd',
                });
            }
        );
    }

    async get(endpoint, params = {}, headers = {}) {
        try {
            return await this.client.get(endpoint, { params, headers });
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint, data = {}, headers = {}) {
        try {
            return await this.client.post(endpoint, data, { headers });
        } catch (error) {
            throw error;
        }
    }

    async put(endpoint, data = {}, headers = {}) {
        try {
            return await this.client.put(endpoint, data, { headers });
        } catch (error) {
            throw error;
        }
    }

    async delete(endpoint, headers = {}) {
        try {
            return await this.client.delete(endpoint, { headers });
        } catch (error) {
            throw error;
        }
    }

    async upload(endpoint, formData, headers = {}) {
        try {
            const uploadHeaders = {
                ...headers,
                'Content-Type': 'multipart/form-data',
            };
            return await this.client.post(endpoint, formData, { headers: uploadHeaders });
        } catch (error) {
            throw error;
        }
    }
}

export default ApiClient;
