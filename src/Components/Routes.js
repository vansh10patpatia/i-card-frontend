import React,{useEffect,useState} from 'react';
import {  Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import {verifyAccessToken} from '../APIs/login'
import {useDispatch,useSelector} from 'react-redux';
import { SET_AUTH_STATUS, SET_USER_DETAILS } from '../Reducers/types';

export default function Navigation() {
    
    const authStatus = useSelector((state)=>state.user.authStatus);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        //if authstatus is false redirecting to the login route
        if(!authStatus && location.pathname.includes('/generate')){
            navigate("/");
        }

    },[authStatus,location.pathname,navigate]);

    useEffect(()=>{
        setLoading(true);
        verifyAccessToken(localStorage.getItem('accessToken'))
                .then((response)=>{
                    if(response){
                        dispatch({type: SET_AUTH_STATUS, payload: { authStatus: true } });
                        dispatch({type: SET_USER_DETAILS, payload: { userDetails: response.data } });
                        navigate("/generate");
                    }
                    else{
                        navigate("/");
                    }
                    setLoading(false)
                }).catch((error)=>{
                    console.log(error);
                    setLoading(false)
                })
    },[authStatus,dispatch,navigate])

    return (
        
            <Routes>
                
                <Route exact path="/generate"  element={<Home />}/>
                <Route exact path="/"  element={<Login loading={loading} setLoading={setLoading} />}/>
                
            </Routes>
    )
}

