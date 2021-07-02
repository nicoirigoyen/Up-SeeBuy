import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';

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
            <h3 className={classes.titulo}>Up-SeeBuy</h3>
            {/* <img className={classes.image} src='IMG' alt="UPP-SEEBUY" /> */}
          </Link>
          <div>
          <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
               
                </IconButton>
                </div>
                
        </Toolbar>
      </AppBar>
    </div>
  )
};
