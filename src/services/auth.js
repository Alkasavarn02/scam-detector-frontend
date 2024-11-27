import axios from "axios";

export const login = async(data)=>{
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, data ,{
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        }
    });
    return res;
}

export const addReportScam = async(data) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/report-scam`, data , {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const getScamStatus = async(data) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/scam-status?value=${encodeURIComponent(data)}`, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const getAllData = async() => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/scam-list`, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

