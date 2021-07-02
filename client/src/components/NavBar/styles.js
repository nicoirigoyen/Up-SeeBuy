import { makeStyles } from '@material-ui/core';
import theme from '../utils/theme';

export const createStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
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
  titulo: {
    fontSize: '26px',
    fontFamily: 'arial',
    color: 'white'
  },
});
