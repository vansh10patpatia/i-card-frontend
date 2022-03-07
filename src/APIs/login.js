import {apiUrl} from '../config';
import axios from 'axios';

async function loginAdmin({email,password}) {
  console.log(apiUrl + '/auth/login');
    const response = await axios.post(apiUrl+'/auth/login',
        JSON.stringify({email,password}),
          {
            headers: {
              'Content-Type': 'application/json',
              
            },
            withCredentials: true
          }
        ).catch((error)=>{});
        return response?.data;   
}

async function verifyAccessToken(token){
  const AuthStr = 'Bearer '.concat(token); 
    const response = await axios({
      method: 'post', //you can set what request you want to be
      url: apiUrl+'/auth/verifyToken',
      headers: {
        authorization: AuthStr
      }
    })
          return response?.data;   
}
export {loginAdmin,verifyAccessToken}

