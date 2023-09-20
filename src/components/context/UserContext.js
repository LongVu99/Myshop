import { createContext  } from 'react';
import {UserReducers} from "./reducers/UserReducers";
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from "./contant"
import axios from 'axios';
 const UserContext = createContext()

 const UserContextProvider = ({children}) =>{
    const [authSate, dispatch] =  UserReducers(UserReducers,
        {
         userloading:true,
         isAuthenticate: false,
         user:null
       
    })

    // login
    const loginUser = async userForm =>{
         try{
            const responese = await axios.post(`${apiUrl}/auth/login`)
            console.log("oihiuh",responese)
            if (responese.data.success)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, responese.accessToken)
            return responese.data
         }catch(error){
           if (error.responese.data) return error.response.data
           else return{succuss: false, message: error.message}
         }
    }

    // Context data

    const userContextData = {loginUser}

    // return
    return(
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    )
 }
 export default UserContextProvider