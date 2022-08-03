import axios from "axios";
import { URL_LOGIN } from "../config";

const LogInClient = axios.create({
    baseURL: URL_LOGIN
})

export default LogInClient;