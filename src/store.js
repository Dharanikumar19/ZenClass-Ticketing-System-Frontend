import { configureStore,  } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/TicketListPage/ticketSlice";
import loginReducer from "./components/Login/loginSlice";
import userReducer from "./pages/Dashboard/userSlice"
import newTicketReducer from "./components/Add-TicketForm/addTicketSlice"
import registrationReducer from "./components/Register/registerSlice";
import passwordReducer from "./components/PasswordReset/passwordSlice"
 
const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user : userReducer,
        openTicket : newTicketReducer,
        registration : registrationReducer,
        password : passwordReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


export default store;