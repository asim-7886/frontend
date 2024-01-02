import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
           process.env.REACT_APP_STRIPE_APP_DEV_URL + url, params);
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

// export const makePaymentRequest = axios.create({
//     baseURL:  'process.env.REACT_APP_STRIPE_APP_DEV_URL',
//     headers: {
//         Authorization: "bearer " + "E438806FFE7B49C8B9908D47CB02E8B6"
//     },
// });
