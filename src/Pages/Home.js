import React,{useState,useRef} from 'react'
import Navbar from "../Components/Navbar"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Eraimage from "../assets/graphicera.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import domtoimage from 'dom-to-image';
import {useSelector} from 'react-redux';







const Input = styled('input')({
    display: 'none',
  });


function Form(props){

    const userDetails = useSelector((state)=>state.user.userDetails);

    const [name,setName] = useState(userDetails?.name)
    const [email,setEmail] = useState(userDetails?.email);
    const [phno,setPhno] = useState(userDetails?.phno);
    const [studentId,setStudentId] = useState(userDetails?.userid);
    const [session,setSession] = useState(userDetails?.session);
    const [image,setImage] = useState(require('../assets/avtar.png'));
    const [imageName,setImageName] = useState('');
    const [loading,setLoading] = useState(false)
    const [success, setSuccess] = useState(false);

    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
      };
    

    const printRef = useRef();

    function downloadImage(){
        setSuccess(false);
        setLoading(true);
        domtoimage.toBlob(document.getElementById('i-card-container'))
            .then(function (blob) {
                require("downloadjs")(blob, 'i-card.png');
                setSuccess(true);
                setLoading(false);
            });
    }

    function onSelectFile(e){
        setImageName('')
        setImageName(e.target.files[0].name)
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
           <Navbar name={name}/>
           <Box className='Box1'>
                <Typography className='heading-name' variant="h4" component="h3">
                    Fill in the details
                </Typography>
            </Box>
            <div className="home-page-all-containers">
                <div className="i-card-girl-image">
                    <img src={require('../assets/dumyimage.png')} className='girl-card-image' alt="" />
                </div>
                <div className="main-containers-for-page">
                    <div className="i-card-wrapper">

                        <div className="id-card-container" id='i-card-container' ref={printRef}>
                            <div className="id-card-img-container">
                                <img src={Eraimage} alt="" />
                                <div className="avatar-container">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="top-text-div" >
                                <img src={require('../assets/icon.png')} alt="" />
                                <p className='geu-name'>Graphic Era Deemed to be University</p>
                            </div>
                            <div className="id-card-text-container">
                                <h1>{name}</h1>
                                <p>{phno}</p>
                                <p> Id : {studentId} </p>
                                <p>{email}</p>
                                <p>Session : {session}</p>
                            </div>
                        </div>
                    </div>
                    <Card variant="outlined" className="admin-login-card">
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" className="admin-login-welcome" style={{fontWeight: 600}} gutterBottom>
                                Graphic Era I card
                            </Typography>
                            <Grid container xs={12} sm={12} md={12}>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Name" className="login-inputs" variant="outlined" placeholder="Enter your name..."  focused 
                                        value={name}
                                        onChange={(event)=>{setName(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Email" variant="outlined" className="login-inputs" placeholder="Type your email..."  focused 
                                        value={email}
                                        onChange={(event)=>{setEmail(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Student Id" className="login-inputs" variant="outlined" placeholder="Enter your student id..."  focused 
                                        value={studentId}
                                        onChange={(event)=>{setStudentId(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Phone" variant="outlined" className="login-inputs" placeholder="Type your number..."  focused 
                                        onChange={(event)=>{setPhno(event.target.value)}}
                                        value={phno}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Session" className="login-inputs" variant="outlined" placeholder="Eg. 2020-24"  focused 
                                        value={session}
                                        onChange={(event)=>{setSession(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <label htmlFor="contained-button-file">
                                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event)=>onSelectFile(event)}/>
                                            <Button variant="contained" 
                                             component="span">
                                                Upload Image
                                            </Button>
                                        </label>
                                        <br />
                                        {imageName}
                                    </Typography>
                                </Grid>

                            </Grid>
                            
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                
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
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>

    )
}
export default Form