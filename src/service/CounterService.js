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

const detectDevice = () => {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 768) {
        return 'Mobile';
    } else if (screenWidth >= 768 && screenWidth < 992) {
        return 'Tablet';
    } else {
        return 'Desktop';
    }
}


const detectBrowser = () => {
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf('OPR') !== -1) {
        return 'Opera';
    } else if (userAgent.indexOf("Edg") !== -1) {
        return 'Edge';
    } else if (userAgent.indexOf("Chrome") !== -1) {
        return 'Google Chrome';
    } else if (userAgent.indexOf("Safari") !== -1) {
        return 'Safari';
    } else if (userAgent.indexOf("Firefox") !== -1) {
        return 'Mozilla Firefox';
    } else if (userAgent.indexOf("MSIE") !== -1 || (!!document.documentMode === true)) {
        return 'IE';
    } else {
        return 'Unknown';
    }
}


const DetectBrowser = () => {
    try {
        var browserVersion = navigator.appVersion;
        var deviceType = detectDevice();
        var browserName = detectBrowser();

        var OSName = "Unknown OS";
        if (navigator.platform.indexOf("Win") != -1) OSName = "Windows";
        if (navigator.platform.indexOf("Mac") != -1) OSName = "MacOS";
        if (navigator.platform.indexOf("Linux") != -1) OSName = "Linux";
        if (navigator.platform.indexOf("iPhone") != -1) OSName = "iOS";
        if (navigator.platform.indexOf("Android") != -1) OSName = "Android";


        const dataDetectBrowser = { browserName: browserName, browserVersion: browserVersion, OSName: OSName, deviceType: deviceType }
        console.log('dataDetectBrowser ===>', dataDetectBrowser);

        return dataDetectBrowser;

    } catch (error) {
        console.error(err);
        throw err;
    }

}

const SendDataUser = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/userdata`, userData);
        console.log("Send data success", response.data);

    } catch (error) {
        console.error("Error sending data", error);
    }
}



export { getIpAddressUser, DetectBrowser, SendDataUser }

