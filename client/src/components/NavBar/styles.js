import { makeStyles } from '@material-ui/core';
import theme from '../utils/theme';

export const createStyles = makeStyles({
  root: {
    flexGrow: 1,
    
    
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
    backgroundColor: 'black'
  },
  ctnUser: {
    display: 'flex',
    flexDirection: 'row',
  },
  ctnButton: {
    margin: '0 0.438rem',
  },
  linkButton: {
    textDecoration: 'none',
  },
  ctnImage: {
    marginInlineEnd: 'spaceAround',
    height: '3.125rem',
    width: '100%',
  },
  link: {
    flexGrow: 1,
  },
  image: {
    width: '9.375rem',
    height: '3.125rem',
  },
  tittle: {
    fontSize: '34px',
    fontFamily: 'open-sans',
    color: 'white',
    textDecoration: 'underline black'
  },
  containerLogin: {
    display:'flex',
    flexDirection: 'row',
    marginLeft: '40vh'
  },
  singin: {
    fontSize: '18px',
    fontFamily: 'Arial',
    color: 'white',
    marginRight: '1vw',
    textDecoration: 'underline black',
  },
 
  register: {
    fontSize: '18px',
    fontFamily: 'Arial',
    color: 'white',
    marginRight: '2vw',
    textDecoration: 'underline black'
  },
});
