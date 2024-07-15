import {API} from ".."

export class SearchAPI extends API {
    public constructor(){
        super(null, process.env.API_KEY)
    }
}

