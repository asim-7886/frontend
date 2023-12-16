import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer" + "de1229c935ff1d25381013d296ad7de5afa4d367d5388429603e65e0ce4d2b50e79b8f3d79e6b5128b7ca3ed3e8b5e8934f99a3f9e4fa85ebbb890a2053d8d9f48c1a173515660e21e1a1f19bd59c285a575a1e8768d31ca533d0089d5b7e126c4de80447acad133f4138738f20b490cba536fed2d5f6ae106a5d8fb6e2efe7a",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
           'http://192.168.0.12:1337' + url,
            params
            
        );
       
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL:  'http://192.168.0.12:1337',
    headers: {
        Authorization: "bearer " + "E438806FFE7B49C8B9908D47CB02E8B6"
    },
});
