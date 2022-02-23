import {apiUrl} from '../config';
import axios from 'axios';

async function loginAdmin({userid,password}) {
  console.log(apiUrl + '/auth/login');
    const response = await axios.post(apiUrl+'/auth/login',
        JSON.stringify({userid,password}),
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
  const response = await axios.post(apiUrl+'/auth/verifyToken',
            { 
              headers: { Authorization: AuthStr } 
            }
          )
          .catch((error) => {
              console.log('error ' + error);
            });
          return response?.data;   
}
export {loginAdmin,verifyAccessToken}