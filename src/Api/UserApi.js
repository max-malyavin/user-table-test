import { istance } from "./Api"


export const userAPI = {
    getUsers(){
    return istance.get(`/`).then(data=> {
            return data.data
         })
     },
     deleteUser(id){
      // return istance.delete(`/${id}`)
        return istance.get(`/${id}`)
     },
     updateUser(id,username,Email){
      // return istance.patch(`/${id}`,{username: username, email: Email })
      return true
     }, 
     getUser(userId){
        return istance.get(`/${userId}`).then(data=> {
         return data.data
      })
     },
}