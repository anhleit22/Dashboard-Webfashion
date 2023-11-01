import axios from "./customize-axios";
import { User } from "../typeGlobal";

const loginAPI = (User: User)=>{
    return axios.post("/api/login", User);
}
const registerAPI = (User:User) => {
    return axios.post("/api/register", User)
}
export {loginAPI, registerAPI };