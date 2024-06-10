import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons';
import ReactPlayer from 'react-player';
import sit from 'src/assets/images/products/sit.mp4';
import up from 'src/assets/images/products/up.mp4';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DashboardCard from '../../../components/shared/DashboardCard';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const YearlyBreakup = () => {
  // chart color

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [playing, setplaying] = React.useState(false);

  const [change, setChange] = React.useState(sit);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = (e) => {
    setOpen2(true);
   
    if(e.target.name == "sit") setChange(sit)
      else setChange(up)
  };

  const handleClickOpenVideo = () => {

  setplaying((prev)=>!prev)
  
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };



  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const color = '#ECF2FF'
  const successlight = theme.palette.primary.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [38, 40, 25];

  return (
    <DashboardCard title="Plan Basico">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
           Cumplimiento
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: color, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#5D87FF" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +9%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Ultimo año
            </Typography>
          </Stack>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2023
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2024
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
             
               <Button variant="outlined" onClick={handleClickOpen}>
               Detalle
               </Button>



      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Detalle
            </Typography>
           
          </Toolbar>
        </AppBar>


        <List>
          <ListItemButton>
            <ListItemText primary="Sentarse"  />
            <Button variant="outlined" name='sit' onClick={handleClickOpen2}>
               Video
               </Button>
          </ListItemButton>
          
        
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Dar la pata"
            />

          <Button disabled variant="outlined" onClick={handleClickOpen2}>
               Video
               </Button>
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Levantarse"
            />

          <Button variant="outlined" name="up" onClick={handleClickOpen2}>
               Video
               </Button>
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Rodar"
            />

          <Button disabled variant="outlined" onClick={handleClickOpen2}>
               Video
               </Button>
          </ListItemButton>
 <ListItemButton>
            <ListItemText
              primary="Quedarse quieto"
            />

          <Button disabled variant="outlined" onClick={handleClickOpen2}>
               Video
               </Button>
          </ListItemButton>
          <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">
          VIDEO
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose2}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <ReactPlayer  url={change}
        width={500}
        height={300}

muted
controls
playing={playing}

/>
        </DialogContent>
        
      
      </BootstrapDialog>
        </List>
      </Dialog>

            </Stack>
          </Stack>

        </Grid>
    
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="150px"
          />
        </Grid>
      </Grid>

    </DashboardCard>
  );
};

export default YearlyBreakup;
