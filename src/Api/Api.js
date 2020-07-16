import Axios from "axios"


export const istance = Axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/users/',
});
