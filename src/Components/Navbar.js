import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import group from "../assets/logo.png"
import {useDispatch} from 'react-redux';
import { SET_AUTH_STATUS, SET_USER_DETAILS, SET_ACCESS_TOKEN } from '../Reducers/types';

const ResponsiveAppBar = (props) => {
 
  const dispatch = useDispatch();
    
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {name} = props;

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserLogout=()=>{
    dispatch({ type: SET_USER_DETAILS, payload: { userDetails: {} } });
    dispatch({ type: SET_ACCESS_TOKEN, payload: { accessToken: '' } });
    dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: false } });
    localStorage.setItem('accessToken', '');
  }

  return (
    <AppBar  position="fixed">
      <Container className='header' maxWidth="x1">
        <Toolbar disableGutters>
          <img src={group} alt="Logo" ></img>
          <Box sx={{ flexGrow: 2 }} className="user-box">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key={'Logout'} onClick={handleUserLogout}>
                  <Typography textAlign="center">{'Logout'}</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;