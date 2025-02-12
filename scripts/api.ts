import { ICats } from "@/interfaces/ICats.rdo";
import axios from "axios";

const apiCat = 'https://api.thecatapi.com/v1/images/search?limit=10'
const CatApi = {
    fetchdata : async() => {
        try{
            const response = await axios.get<ICats[]>(apiCat);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}
export default CatApi;