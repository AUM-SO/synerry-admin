import axios from "axios";

const getUserData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/getuserdata`);

        return response;

    } catch (error) {
        console.error("Error getUserData", error);
        throw error;

    }
}

const filterUserData = async (filterData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/filteruserdata`, filterData);
        
        return response;

    } catch (error) {
        console.error("Error getUserData", error);
        throw error;

    }
}

export { getUserData, filterUserData }