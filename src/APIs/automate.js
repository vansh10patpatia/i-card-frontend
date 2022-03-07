import {apiUrl} from '../config';
import axios from 'axios';
// import  mydata from './csvjson.json'



// register

async function register() {
    const mydata = [];
    for (let i = 0; i < mydata.length; i++){
        // setTimeout(()=>{
            const email = mydata[i].email.toLowerCase();
            const password = mydata[i].password.toLowerCase();
            console.log(email,password);
            const response = await axios.post(apiUrl+'/auth/register',
            JSON.stringify({email,password}),
                {
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                withCredentials: true
                }
            ).catch((error)=>{});
            console.log(response);
        // },2500)
    }
  }

  export {register}