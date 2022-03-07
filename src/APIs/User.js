import {apiUrl} from '../config';
import axios from 'axios';

async function editUser(id,name,phno,bloodGroup,session,token) {
    const AuthStr = 'Bearer '.concat(token); 
    const response = await axios({
        method: 'post', //you can set what request you want to be
        url: apiUrl+'/user/editUser',
        data: JSON.stringify(
            {id,name,phno,bloodGroup,session}
        ),
        headers: {
          authorization: AuthStr,
          'content-Type': 'application/json',
        }
      })
    
    return response?.data;   
}

async function updatePassword(id,oldPassword,password,token) {
    const AuthStr = 'Bearer '.concat(token); 
    const response = await axios({
        method: 'post', //you can set what request you want to be
        url: apiUrl+'/user/editUser',
        data: JSON.stringify(
            {id,oldPassword,password}
        ),
        headers: {
          authorization: AuthStr,
          'content-Type': 'application/json',
        }
      })
    
    return response?.data;   
}



export {editUser,updatePassword}

