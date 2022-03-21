import {
    registrationPending,
    registrationSuccess,
    registrationError,
  } from "./registerSlice";
  
  import { userRegistration } from "../../api/userApi";
  
  export const newUserRegistration = (formData) => async (dispatch) => {
    try {
      //dispatch(registrationPending());
  
      const result = await userRegistration(formData);
         console.log(result);
      result.status === "success"
        ? dispatch(registrationSuccess(result.message))
        : dispatch(registrationError(result.message));
    
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };