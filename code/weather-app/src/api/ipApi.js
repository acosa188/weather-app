import axios from 'axios';

async function getLocation(callback){
    await axios
        .get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.VUE_APP_IPAPI_KEY}`)
        .then((r) => {
            callback(r.data);
        })
        .catch((e) => {
            return e;
        });
}

export default {
    getLocation
}
