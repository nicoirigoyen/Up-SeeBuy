import { makeStyles } from '@material-ui/core';
import theme from '../../utils/theme';

export const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(201, 226, 201, 0.2)',
        border: `0.1rem solid ${theme.palette.primary.dark}`,
        marginTop: '5rem',
        marginBottom: '1rem',
        borderRadius: '1rem',
        width: '45rem',
        justifyContent: 'center',
        marginLeft: '5rem',
        color: theme.palette.primary.dark,
      },
      background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        maxWidth: 'none',
      },
})