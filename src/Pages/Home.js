import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"; 
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Eraimage from "../assets/graphicera.png"; 
import Nss from "../assets/nss-logo.png"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import domtoimage from "dom-to-image";
import { useSelector } from "react-redux";
import Lottie from 'react-lottie';
import animationData from "../assets/animations/loading2.json";
const Input = styled("input")({
  display: "none",
});

function Form(props) {
  const userDetails = useSelector((state) => state.user.userDetails);

  const [name, setName] = useState(userDetails?.name);
  const [email, setEmail] = useState(userDetails?.email);
  const [phno, setPhno] = useState(userDetails?.phno);
  const [bloodGroup, setBloodGroup] = useState(userDetails?.bloodgroup);
  const [session, setSession] = useState(userDetails?.session);
  const [image, setImage] = useState(require("../assets/avtar.png"));
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [avatarClass,setAvatarClass]=useState(false)
 
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  const printRef = useRef();

  function downloadImage() {
    setSuccess(false);
    setLoading(true);
    domtoimage
      .toBlob(document.getElementById("i-card-container"))
      .then(function (blob) {
        require("downloadjs")(blob, "i-card.png");
        setSuccess(true);
        setLoading(false);
      });
  }

  function onSelectFile(e) {
    setImageName("");
    setImageName(e.target.files[0].name);
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
    setAvatarClass(true)
  }
  const lottieRef = useRef();
const [loadingAnimation, setLoadingAnimation] = useState(true)
const defaultOptions={
  loop: true,
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
setTimeout(() => {
  setLoadingAnimation(false)
}, 2500);
// lottieRef.current.setSpeed(2);
// Lottie.setSpeed(2)
  return (
    <> 
    {loadingAnimation?
    <div className="loading-animation-container">
    <Lottie options={defaultOptions}   speed={2}/>
      </div>
    :
    (
      <div>
      <Navbar name={name} />
      <Box className="Box1">
        <Typography className="heading-name" variant="h4" component="h3">
          Fill in the details
        </Typography>
      </Box>
      <div className="home-page-all-containers">
        <div className="i-card-girl-image">
          <img style={{transform:"scaleX(-1)",left:'-12%'}}
            src={require("../assets/oie_transparent.png")}
            className="girl-card-image"
            alt=""
          />
        </div>
        <div className="main-containers-for-page">
          <div className="i-card-wrapper">
            <div
              className="id-card-container"
              id="i-card-container"
              ref={printRef}
            >
              <div className="id-card-img-container">
                <img src={Eraimage} alt="" />
                <div className="avatar-container">
                  <img  className= {avatarClass?"img-height-after-upload":null} src={image} alt="" />
                </div>
              </div>
              <div className="top-text-div">
                <img src={require("../assets/nss-logo.png")} style={{width:"60px"}} alt="" />
                <p className="geu-name">National Service Scheme Graphic Era Unit</p>
              </div>
              <div className="id-card-text-container">
                <p   >VOLUNTEER</p>
                <h1>{name}</h1>
                <p>{phno}</p>
                <p> Blood Group : {bloodGroup} </p>
                <p>{email}</p>
                <p>Session : {session}</p>
                <p>#NOTMEBUTYOU</p>
              </div>
            </div>
          </div>
          
          <div className="data-input-card-container">
            <h1>Graphic Era I card</h1>
            <div className="input-feild-container">
              <div className="textOnInput"> 
                <TextField id="outlined-basic" label="Name" className="login-inputs" variant="outlined" placeholder="Enter your name..."  focused 
                                        value={name}
                                        onChange={(event)=>{setName(event.target.value)}}
                                        /> 
              </div>
              <div className="textOnInput"> 
                <TextField id="outlined-basic" label="Email" variant="outlined" className="login-inputs" placeholder="Type your email..."  focused 
                                        value={email}
                                        onChange={(event)=>{setEmail(event.target.value)}}
                                        />
              </div>
              <div className="textOnInput"> 
                                        <TextField id="outlined-basic" label="Blood Group" className="login-inputs" variant="outlined" placeholder="Enter your Blood Group"  focused 
                                        value={bloodGroup}
                                        onChange={(event)=>{setBloodGroup(event.target.value)}}
                                        />
              </div>
              <div className="textOnInput"> 
                                        <TextField id="outlined-basic" label="Phone" variant="outlined" className="login-inputs" placeholder="Type your number..."  focused 
                                        onChange={(event)=>{setPhno(event.target.value)}}
                                        value={phno}
                                        />
              </div>
              <div className="textOnInput">  
                                        <TextField id="outlined-basic" label="Session" className="login-inputs" variant="outlined" placeholder="Eg. 2020-24"  focused 
                                        value={session}
                                        onChange={(event)=>{setSession(event.target.value)}}
                                        />
              </div>
              <div className="textOnInput">  
                <Typography variant="p" component="div" className="login-input-container">
                                        <label htmlFor="contained-button-file">
                                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event)=>onSelectFile(event)}/>
                                            <Button variant="contained"  
                                            // onClick={setAvatarClass(true)}
                                             component="span">
                                                Upload Image
                                            </Button>
                                        </label>
                                        <br />
                                        {imageName}
                                    </Typography>
              </div>
            </div>
            <div className="input-download-btn">

            <Box sx={{ m: 1, position: 'relative' }}>
                                    <Button
                                        variant="contained"
                                        className="continue-button"
                                        sx={buttonSx}
                                        disabled={loading}
                                        onClick={()=>downloadImage()} 
                                    >
                                        Download
                                    </Button>
                                    {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                        color: green[500],
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
      </div>
      </div>
    )
    }
    
    </>
  );
}
export default Form;
