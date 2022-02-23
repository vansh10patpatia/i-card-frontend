import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../APIs/login";
import { useDispatch } from "react-redux";
import {
  SET_AUTH_STATUS,
  SET_USER_DETAILS,
  SET_ACCESS_TOKEN,
} from "../Reducers/types";

export default function Login(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("Default");
  const [useridError, setuseridError] = useState(false);
  const [useridErrorText, setuseridErrorText] = useState("Default");
  // const [loading,setLoading] = useState(false)
  const { loading, setLoading } = props;

  const [userid, setuserid] = useState("");
  const [password, setPassword] = useState("");

  function loginStudent() {
    setuseridError(false);
    setPasswordError(false);
    setLoading(true);
    loginAdmin({ userid, password })
      .then((response) => {
        if (response) {
          localStorage.setItem("accessToken", response.data.accessToken);
          dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: true } });
          dispatch({
            type: SET_USER_DETAILS,
            payload: { userDetails: response.data },
          });
          dispatch({
            type: SET_ACCESS_TOKEN,
            payload: { accessToken: response.data.accessToken },
          });
          navigate("/generate");
        } else {
          setPasswordError(true);
          setPasswordErrorText("Invalide Credentials");
          setuseridError(true);
          setuseridErrorText("Invalid Credentials");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="login-page-container">
        <div className="login-page-img-container">
          <img src={require("../assets/loginImage.png")} alt="login" />
        </div>
        <div className="login-page-card-container">
          {/* <Card variant="outlined" className="admin-login-screen-card">
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" className="admin-login-welcome" style={{fontWeight: 600}} gutterBottom>
                                Hey, Welcome Back!
                            </Typography>
                            <Typography variant="p" component="div">
                                Log in to your account to continue
                            </Typography>
                            <Typography variant="p" component="div" className="login-input-container">
                                <TextField id="outlined-basic" label="User-Id" className="login-inputs" variant="outlined" placeholder="Enter your user-id..."  focused 
                                error={useridError} helperText={useridError?(useridErrorText):(null)}
                                onChange={(event)=>{setuserid(event.target.value)}}
                                />
                            </Typography>
                            <Typography variant="p" component="div" className="login-input-container">
                                <TextField id="outlined-basic" type="password" label="Password" variant="outlined" className="login-inputs" placeholder="Type your password"  focused error={passwordError} helperText={passwordError?(passwordErrorText):(null)}
                                onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Typography>
                             
                           
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <Box sx={{ m: 1, position: 'relative' }}>
                                    <Button
                                        variant="contained"
                                        className="continue-button"
                                        disabled={loading}
                                        onClick={()=>loginStudent()}
                                        >
                                        Continue
                                    </Button>
                                    {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                    )}
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card> */}

                        <div className="data-input-card-container login-input-container-login">
                            <h1>Hey, Welcome Back!</h1>
                            <h2> Log in to continue</h2>
                            <div className="input-feild-container">
                                <div className="textOnInput">

                            <TextField id="outlined-basic" label="User-Id" className="login-inputs" variant="outlined" placeholder="Enter your user-id..."  focused 
                                error={useridError} helperText={useridError?(useridErrorText):(null)}
                                onChange={(event)=>{setuserid(event.target.value)}}
                                />
                                </div>
                                <div className="textOnInput">

                                 <TextField id="outlined-basic" type="password" label="Password" variant="outlined" className="login-inputs" placeholder="Type your password"  focused error={passwordError} helperText={passwordError?(passwordErrorText):(null)}
                                onChange={(event)=>{setPassword(event.target.value)}}/>
                                </div>
                            </div>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                    <Button
                                        variant="contained"
                                        className="continue-button"
                                        disabled={loading}
                                        onClick={()=>loginStudent()}
                                        >
                                        Continue
                                    </Button>
                                    {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                    )}
                                </Box>
                            </div>




























        </div>
      </div>
    </>
  );
}
