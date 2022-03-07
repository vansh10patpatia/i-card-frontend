import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DownloadModal(props) {
  const {open,setOpen,downloadImage,loading,buttonSx} = props;

  return (
    <div>
      
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Download I-card
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to download the I-card?
            You won't be able to change your data after first download.
          </Typography>
            <div className="input-download-btn">
                <Button 
                    variant="contained"
                    className="continue-button"
                    onClick={()=>setOpen(false)}
                    style={{marginLeft:-10,marginRight:10}}
                >
                    Cancel
                </Button>
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
            </div>
        </Box>
      </Modal>
    </div>
  );
}
