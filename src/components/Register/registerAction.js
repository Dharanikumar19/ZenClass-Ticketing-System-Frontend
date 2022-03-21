import {
    registrationPending,
    registrationSuccess,
    registrationError,
  } from "./registerSlice";
  
  import { userRegistration } from "../../api/userApi";
  
  export const newUserRegistration = (formData) => async (dispatch) => {
    try {
  
      const result = await userRegistration(formData);
      result.status === "success"
        ? dispatch(registrationSuccess(result.message))
        : dispatch(registrationError(result.message));
    
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };