import axios from "axios"
import appConfig from "../config";
import {PAGE_LIMIT} from "../globalutilities/CONST";

export const getCategories = async (page, pageSize) => {
    try {
        const res = await axios.get(`${appConfig.appUrl}/category?page=${page}&limit=${pageSize || PAGE_LIMIT}`, {
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
