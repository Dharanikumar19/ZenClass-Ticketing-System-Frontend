import {
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail,
} from "./addTicketSlice";

import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (formData) => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(openNewTicketPending())
            //create ticket api
            const result = await createNewTicket(formData)
            if (result.status === "error") {
                return dispatch(openNewTicketFail(result.message))
            }
            dispatch(openNewTicketSuccess(result.message))
        } catch (error) {
            dispatch(openNewTicketFail(error.message))
        }
    })
}