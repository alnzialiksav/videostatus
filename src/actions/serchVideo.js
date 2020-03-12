import axios from "axios"
import appConfig from "../config";
import {PAGE_LIMIT} from "../globalutilities/CONST";

export const searchVideo = async (search) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/video/search?search=${search}`, {
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

export const getPopular= async (page, pageSize,search) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/video/search?search=${search}?page=${page}&limit=${pageSize || PAGE_LIMIT}`, {
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

