import axios from "axios";
import { URL_API } from "../config";

const PlatosClient = axios.create({
    baseURL: URL_API
})

export default PlatosClient;