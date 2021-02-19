import axios from 'axios';

async function getLocation(callback){
    await axios
        .get(`http://api.ipapi.com/api/check?access_key=${process.env.VUE_APP_IPAPI_KEY}`)
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
