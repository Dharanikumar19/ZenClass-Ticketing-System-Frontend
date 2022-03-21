import axios from "axios";

//student api
//get all tickets
export const getAllTickets = () => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get("https://zen-class-ticketing-system.herokuapp.com/ticket", {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            }})
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
    
}

//mentor api
//get all tickets of all users for mentor
export const getAllTicketsForMentor = () => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get("https://zen-class-ticketing-system.herokuapp.com/ticket/allTickets", {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            }})
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
    
}

//student api
//get single ticket
export const getSingleTicket = (_id) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(`https://zen-class-ticketing-system.herokuapp.com/ticket/${_id}`, {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            }})
            resolve(result)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
    
}

//mentor api
//get single ticket for mentor
export const getSingleTicketForMentor = (_id) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(`https://zen-class-ticketing-system.herokuapp.com/ticket/mentor/${_id}`, {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            }})
            resolve(result)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
    
}

//update reply message for both student and mentor
export const updateReplyTicket = (_id, msgObj) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.put(`https://zen-class-ticketing-system.herokuapp.com/ticket/${_id}`, msgObj, {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            },         
        })
            resolve(result.data)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
    
}

//close ticket for student
export const updateToCloseTicket = (_id) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.patch(`https://zen-class-ticketing-system.herokuapp.com/ticket/closeTicket/${_id}`,{}, {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            },         
        })
            resolve(result.data)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
    
}


//creating new ticket
export const createNewTicket = (formData) => {
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.post(`https://zen-class-ticketing-system.herokuapp.com/ticket`,formData, {
            headers : {
                Authorization: sessionStorage.getItem("access_token")
            },         
        })
            resolve(result.data)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
    
}