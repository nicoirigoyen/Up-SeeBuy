import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

// import SweetAlert from 'sweetalert2';

import { createStyles } from './styles';
// import Sweet from '../Sweet/Sweet';


export default function NavBar() {
  const classes = createStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const { user: supabaseUser, signOut } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link to="/home" className={classes.link}>
            <Typography className={classes.tittle} >Up-SeeBuy</Typography>
            {/* <img className={classes.image} src='IMG' alt="UPP-SEEBUY" /> */}
          </Link>
          <Typography className={classes.containerLogin} >
          
          <Link to="/singin" className={classes.singin}>
            <Typography className={classes.singin} >Ingresar</Typography>
          </Link>
        
          
          <Link to="/register" className={classes.register}>
            <Typography className={classes.register} >Registrarse</Typography>
          </Link>

          <Link to="/post" >
          <Button variant="contained" color="primary" component="span">Publicar</Button>
          </Link>
               
                
          </Typography>
                
        </Toolbar>
      </AppBar>
    </div>
  )
};
