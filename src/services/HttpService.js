
export class HttpService{
    constructor(client){
        this.client = client;
    }

    async get(endpoint, config = {}){
        try {
            const {data} = await this.client.get(endpoint, config);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async post(endpoint, body, config = {}){
        try {
            const {data} = await this.client.post(endpoint, body, config);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
