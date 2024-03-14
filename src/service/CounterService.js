import axios from "axios";

const getIpAddressUser = async () => {
    try {
        const response = await axios.get('https://api.ipify.org?format=json', {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.ip;
    } catch (err) {
        console.error(err);
        throw err;
    }

}

const DetectBrowser = () => {
    try {
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;

        var OSName = "Unknown OS";
        if (navigator.platform.indexOf("Win") != -1) OSName = "Windows";
        if (navigator.platform.indexOf("Mac") != -1) OSName = "MacOS";
        if (navigator.platform.indexOf("Linux") != -1) OSName = "Linux";
        if (navigator.platform.indexOf("iPhone") != -1) OSName = "iOS";
        if (navigator.platform.indexOf("Android") != -1) OSName = "Android";

        const dataDetectBrowser = { browserName: browserName, browserVersion: browserVersion, OSName: OSName }

        return dataDetectBrowser;

    } catch (error) {
        console.error(err);
        throw err;
    }

}

const SendDataUser = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/userdata`, userData);
        console.log("Send data success :)", response.data);
    } catch (error) {
        console.error("Error sending data:", error);
    }
}



export { getIpAddressUser, DetectBrowser, SendDataUser }

