import { makeStyles } from '@material-ui/core/styles';
import theme from '../utils/theme';

export const useStyles = makeStyles({
root: {
    display: 'flex',
    width: '55%',
    height: '3.8rem',
    backgroundColor: theme.palette.primary.contrastText,
    marginTop: '2vw',
    marginLeft: '25vw',
    borderRadius: '50px',
    alignItems: 'flex-end',
  },
  searchBar: {
    width: '100%',
    textAlign: 'center',    
    marginBottom: '0.8rem',
    alignItems: 'center',

  },
  searchField: {
    width: '38vw',
    textAlign: 'center',
    borderRadius: 15,
    paddingTop: '1.2vw',    
  },
  selectCountry: {
    width: '16vw',
    marginBottom: '0.8rem'
  },

});
