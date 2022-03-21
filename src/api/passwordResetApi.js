import axios from "axios";


export const requestPasswordOtp = (email) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post("https://zen-class-ticketing-system.herokuapp.com/user/resetPassword", { email });
			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = passwordObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch("https://zen-class-ticketing-system.herokuapp.com/user/updatePassword", passwordObj);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};