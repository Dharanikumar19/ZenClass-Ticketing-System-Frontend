import axios from "axios";

const loginUrl = "https://zen-class-ticketing-system.herokuapp.com/user/login";
const userProfileUrl = "https://zen-class-ticketing-system.herokuapp.com/user/singleUser";
const registerUrl = "https://zen-class-ticketing-system.herokuapp.com/user/createUser"

export const userRegistration = (formData) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const res = await axios.post(registerUrl, formData)
            resolve(res.data)
            if(res.data.status === "success"){
                resolve(res.data)
            }
        } catch (error) {
            reject(error)
        }
    })
    
}


export const userLogin = (formData) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const res = await axios.post(loginUrl, formData)
            resolve(res)
            if(res.data.status === "success"){
                sessionStorage.setItem("access_token", res.data.access_token)
                localStorage.setItem("zenClass", 
                JSON.stringify({refresh_token : res.data.refresh_token}))
            }
        } catch (error) {
            reject(error)
        }
    })
    
}

export const fetchUser = () => {
    return new Promise(async(resolve, reject)=>{
        try {
            const access_token = sessionStorage.getItem("access_token")
            if(!access_token){
                reject("Token not found")
            }
            const res = await axios.get(userProfileUrl, {
                headers: {
                    Authorization: access_token,
                }
            })
           
            resolve(res.data)
            
        } catch (error) {
            reject(error.message)
        }
    })
    
}

