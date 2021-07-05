import { makeStyles } from '@material-ui/core/styles';
import theme from '../utils/theme';

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#F0F7D4',
    border: '0.3125em',
    boxShadow: '10px 10px 16px 10px rgba(134,134,134,0.81)',
    borderRadius: '1vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    '& form': {
      maxWidth: '30rem',
    },
    
  },
  input: {
    padding: '0.7rem',
    width: '18rem',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '36px',
    padding: '1vh'
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0.5rem',
  },
  select: {
    width: '16.5rem',
    
  },
  selectt: {
    padding: '0.7rem',
    
  },
  nameCategory: {
    marginLeft:'0.2rem',
    
  },
  button: {
    padding: '0.5rem',
    width: '16rem',
  },
  containerButton: {
    padding: '0.5rem',
    
  },
  
});
