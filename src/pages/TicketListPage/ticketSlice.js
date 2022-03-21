import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: "",
    replyTicketError: "",
    searchTicketList: [],
    selectedTicket: {},
    replyMsg: ""
}

const ticketListSlice = createSlice({
    name: "ticketList",
    initialState,
    reducers: {
        fetchAllTicketsForMentorLoading: (state) => {
            state.isLoading = true
        },
        fetchAllTicketsForMentorSuccess: (state, action) => {
            state.tickets = action.payload;
            state.searchTicketList = action.payload;
            state.isLoading = false
        },
        fetchAllTicketsForMentorFail: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        fetchTicketLoading: (state) => {
            state.isLoading = true
        },
        fetchTicketSuccess: (state, action) => {
            state.tickets = action.payload;
            state.searchTicketList = action.payload;
            state.isLoading = false
        },
        fetchTicketFail: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        searchTickets: (state, { payload }) => {
            state.searchTicketList = state.tickets.filter(row => {
                if (!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase());
            });
        },
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true
        },
        fetchSingleTicketSuccess: (state, { payload }) => {
            state.selectedTicket = payload;
            state.isLoading = false;
            state.error = "";
        },
        fetchSingleTicketFail: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        fetchSingleTicketForMentorLoading: (state) => {
            state.isLoading = true
        },
        fetchSingleTicketForMentorSuccess: (state, { payload }) => {
            state.selectedTicket = payload;
            state.isLoading = false;
            state.error = "";
        },
        fetchSingleTicketForMentorFail: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        replyTicketLoading: (state) => {
            state.isLoading = true
        },
        replyTicketSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = payload
        },
        replyTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.replyTicketError = payload;
        },
        closeTicketLoading: (state) => {
            state.isLoading = true
        },
        closeTicketSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = payload
        },
        closeTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        resetResponseMsg: (state) => {
            state.isLoading = false;
            state.replyTicketError = "";
            state.replyMsg = ""
        },
    }
})

const { reducer, actions } = ticketListSlice;

export const {
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
    resetResponseMsg,
    fetchAllTicketsForMentorLoading,
    fetchAllTicketsForMentorSuccess,
    fetchAllTicketsForMentorFail,
    fetchSingleTicketForMentorLoading,
    fetchSingleTicketForMentorSuccess,
    fetchSingleTicketForMentorFail,
} = actions



export default reducer