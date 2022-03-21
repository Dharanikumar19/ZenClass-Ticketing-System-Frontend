import  {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
    fetchAllTicketsForMentorLoading,
    fetchAllTicketsForMentorSuccess,
    fetchAllTicketsForMentorFail,
    fetchSingleTicketForMentorLoading,
    fetchSingleTicketForMentorSuccess,
    fetchSingleTicketForMentorFail,

} from "./ticketSlice"; 
import {getAllTickets,
   getSingleTicket,
   updateReplyTicket,
   updateToCloseTicket,
   getAllTicketsForMentor,
   getSingleTicketForMentor} from "../../api/ticketApi"

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading())
    try {
        //fetch data from api/ticketapi file 
        const result = await getAllTickets()
        
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}


export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str))
}



//get single ticket
export const fetchSingleTicket = (_id) => async (dispatch) => {
     dispatch(fetchSingleTicketLoading())
    try {
        //fetch data from api 
        const result = await getSingleTicket(_id)
        
        dispatch(fetchSingleTicketSuccess(result.data.result.length && result.data.result[0]));
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message))
    }
}


// for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await updateReplyTicket(_id, msgObj);
        
      if (result.status === "error") {
        return dispatch(replyTicketFail(result.message));
       }
       dispatch(fetchSingleTicket(_id));

       dispatch(replyTicketSuccess(result.message))
  
    } catch (error) {
      console.log(error.message);
      dispatch(replyTicketFail(error.message));
    }
  };


  //for closing ticket
  export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
      const result = await updateToCloseTicket(_id);
      if (result.status === "error") {
        return dispatch(closeTicketFail(result.message));
      }
  
      dispatch(fetchSingleTicket(_id));
  
      dispatch(closeTicketSuccess("Status Updated successfully"));
    } catch (error) {
      console.log(error.message);
      dispatch(closeTicketFail(error.message));
    }
  };

//fetch all users tickets for mentor

export const fetchAllTicketsForMentor = () => async (dispatch) => {
  dispatch(fetchAllTicketsForMentorLoading())
  try {
      //fetch data from api/ticketapi file 
      const result = await getAllTicketsForMentor()
      dispatch(fetchAllTicketsForMentorSuccess(result.data.result));
  } catch (error) {
      dispatch(fetchAllTicketsForMentorFail(error.message))
  }
}

//get single ticket for mentor
export const fetchSingleTicketForMentor = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketForMentorLoading())
 try {
     //fetch data from api 
     const result = await getSingleTicketForMentor(_id)
    
     dispatch(fetchSingleTicketForMentorSuccess(result.data.result.length && result.data.result[0]));
 } catch (error) {
     dispatch(fetchSingleTicketForMentorFail(error.message))
 }
}
