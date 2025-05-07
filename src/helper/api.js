import Config from '../config/config';
import axios from 'axios';

const baseApiURL    = Config.apiURL;
const reqType       = "application/json";


export default function callApi(...params){
    const method        = params[0];
    const url           = params[1] || '';
    const postData      = params[2] || {};
    const authToken     = params[3] || '';
    const userData      = JSON.parse(localStorage.getItem('pocBantiReact') || '{}');
    const reqHeaders    = {
                            Accept:reqType,
                            "Content-Type": reqType,
                            'Access-Control-Allow-Origin': '*'

                        };
    if(!!authToken){
        reqHeaders.Authorization    = "Token " + authToken;
    } else if(!!userData.token){
        reqHeaders.Authorization    = "Token " + userData.token;
    }

    const instance = axios.create({
        headers:reqHeaders
    })

    let result = '';
    let bodyData = {};

    switch(method){
        case 'POST':
            bodyData = JSON.stringify({...postData});
            result = instance.post(baseApiURL+url, bodyData);
        break;

        case 'PUT':
            bodyData = JSON.stringify({...postData});
            result = instance.put(baseApiURL+url, bodyData);
        break;

        case 'DELETE':
            bodyData = JSON.stringify({...postData});
            result = instance.delete(baseApiURL+url, bodyData);
        break;

        case 'GET':
            result = instance.get(baseApiURL+url);
        break;

        default:
            result = instance.get(baseApiURL+url);
        break;
    }
    return result;
}











