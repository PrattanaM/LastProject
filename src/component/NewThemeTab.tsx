import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ColorPicker from './ColorPicker';
import axios from 'axios';
import getTokens from '../utils/getTokens';
import { useColorStore } from '../container/colorStore';
import useStore from '../Test&Example/zustandExample';
import { Buffer } from 'buffer';
import { ThemeData } from '../types/types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';

function NewThemeTab() {
    // const [rectangles, setRectangles] = useState<number[]>([]);
    const [selectedRectangle, setSelectedRectangle] = useState<number | null>(null);
    const [themes, setThemes] = useState<any[]>([]);
    const setColorStore = useColorStore((state) => state.setMainBackgroundColor);
    const [themesData, setThemesData] = useState<ThemeData[]>([]);
    const effectRan = useRef(false);

    useEffect(() => {
        return () => {
            fetchData();
            effectRan.current = true;
        }
    }, []);

    const createTheme = async () => {
        try {
            const token = await getTokens();
            const response = await axios.post('https://api-dev2.keyspace.tech/themes', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            console.log('Themes Data:',);
            // setThemes(response.data.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const fetchData = async () => {
        try {
            const token = await getTokens();
            const response = await axios.get('https://api-dev2.keyspace.tech/themes?type=locker-controller', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            const data = response.data.data;
            setThemes(data);
            setThemesData(data);
            console.log('Themes Data:', data);
            // setThemes(response.data.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const handleRectangleClick = (id: number) => {
        setSelectedRectangle(id);
        console.log('Selected theme ' + id + ' : ', themes.find(item => item._id === id));
    };

    const handleCloseModal = () => {
        setSelectedRectangle(null);
    };

    const handleClick = () => {
        const newTheme = {
            _id: Math.random().toString(36).substr(2, 9),
            title: themes.length > 0 ? `New Theme ${themes.length + 1}` : 'New Theme',

        };
        setThemes((prevThemes) => [...prevThemes, newTheme]);
        createTheme();
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container style={{ paddingLeft: '30px', paddingTop: '30px' }} spacing={2}>
            <Grid item xs={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ marginLeft: '20px' }}>Theme</h1>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleClick()}
                        style={{
                            borderRadius: '50%',
                            fontSize: '20px',
                            padding: '10px',
                            backgroundColor: 'transparent',
                            transition: 'box-shadow 0.3s',
                            boxShadow: 'none',
                        }}
                    >
                        <ControlPointIcon style={{ fontSize: '40px', color: 'black' }} />
                    </Button>
                </div>
            </Grid>

            {themes.map((theme) => (
                <Grid key={theme._id} item style={{ paddingLeft: '55px', paddingBottom: '40px' }}>
                    <Box sx={{
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '10px',
                        width: '250px',
                        height: '270px',
                        textAlign: 'center',
                        bgcolor: 'rgba(235, 235, 235, 0.35)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Button onClick={handleClickOpen} sx={{ position: 'absolute', top: '10px', right: '10px', height: '30px', color: 'red', '&:hover': { backgroundColor: 'transparent', color: 'red' }}}>
                            <HighlightOffIcon/>
                        </Button>
                        <Box onClick={() => handleRectangleClick(theme._id)} sx={{ cursor: 'pointer', w: '100px', h: '100px' }}>
                            <EditIcon style={{ fontSize: '50px', paddingBottom: '20px' }} />
                            <Typography style={{ fontSize: '25px', fontWeight: 'bold' }}> {theme.title} </Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
                }}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    ยืนยันการลบTheme
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ต้องการลบ Theme หรือไม่
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose} sx={{ color: 'red' }}>Delete</Button>
                </DialogActions>
            </Dialog>

            <Modal
                open={selectedRectangle !== null}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        boxShadow: 24,
                        width: '1800px',
                        height: '800px',
                        borderRadius: 3
                    }}>

                    <ColorPicker themesData={themes} />

                </Box>
            </Modal>
        </Grid>
    );
};

export default NewThemeTab;
