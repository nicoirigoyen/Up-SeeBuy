import { makeStyles } from '@material-ui/core/styles';
import theme from '../utils/theme';

export const useStyles = makeStyles({
  root: {
    maxWidth: '21.875em',
    borderRadius: 15,
    margin: '1.875em',
    marginBottom: '1.2em',
    float: 'left',
    border: '0.3125em',
    backgroundColor: theme.palette.info.light,
    paddingBottom: '0.3125em',
    boxShadow: '12px 12px 18px -10px rgba(134,134,134,0.81)',
    minWidth: '21.875em',
  },
  topContainer: {
    padding: 0,
    color: theme.palette.primary.dark,
  },
  topBorder: {
    backgroundColor: theme.palette.primary.main,
    height: '1.5625em',
    width: '100%',
    justifyContent: 'space-between',
  },
  iconContainer: {
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    display: 'flex',
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
  labelCity: {
    marginTop: '0.25em',
  },
  iconButton: {
    padding: 0,
    marginRight: '0.9375em',
    visibility: 'hidden',
  },
  bodyContainer: {
    padding: '0.3125em',
    margin: '0 8px',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0',
    marginTop: '0.3125em',
  },
  title: {
    fontSize: 22,
    marginBottom: 0,
  },
  endJob: {
    fontSize: 11,
    color: theme.palette.secondary.light,
    fontWeight: 'bolder',
    marginRight: '-0.625em',
  },
  jobContainer: {
    padding: 0,
    marginTop: '0.1875em',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  jobRequirement: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 12,
    color: theme.palette.primary.light,
  },
  jobDetail: {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 5,
    paddingTop: '0.6em',

    WebkitBoxOrient: 'vertical',
    textAlign: 'justify',
    marginTop: '0.4375em',
    minHeight: '6.25em',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    marginTop: '0.75em',
  },
  infoButton: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 13,
    padding: '0.3125em',
    '& span': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: theme.palette.primary.light,
    },
  },
  endIcon: {
    margin: 0,
  },
  postButton: {
    textTransform: 'none',
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '0.5em',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
});