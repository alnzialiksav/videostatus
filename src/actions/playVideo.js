import axios from "axios"
import appConfig from "../config";

export const findVideoById= async (id) => {
    try {
        const res = await axios.get(`${appConfig.appUrl}/video/?id=${id}`, {
            headers: {
                "authorization" : `${appConfig.authToken()}`
            }
        })
        return (res && res.data) || {};
    } catch (error) {
        const e = error.response
        console.log("error in getting : ", error)
        return { success: false, message: (e && e.data && e.data.error) || "something went wrong" }
    }
};
