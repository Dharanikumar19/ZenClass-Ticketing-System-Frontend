import {
    otpReqPending,
    otpReqSuccess,
    otpReqFail,
    updatePassSuccess,
} from "./passwordSlice";
import { requestPasswordOtp, updateUserPassword } from "../../api/passwordResetApi";

export const sendPasswordResetOtp = email => async dispatch => {
    try {
        dispatch(otpReqPending());

        const { status, message } = await requestPasswordOtp(email);

        if (status === "success") {
            return dispatch(otpReqSuccess({message, email}));
        }

        dispatch(otpReqFail(message));
    } catch (error) {
        dispatch(otpReqFail(error.message));
    }
};

export const updatePassword = formData => async dispatch => {
    try {
        dispatch(otpReqPending());

        const { status, message } = await updateUserPassword(formData);

        if (status === "success") {
            return dispatch(updatePassSuccess(message));
        }

        dispatch(otpReqFail(message));
    } catch (error) {
        dispatch(otpReqFail(error.message));
    }
};