import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import SweetAlert from 'sweetalert2';
import { useStyles } from './styles';


export default function CardProdcut({ product }) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <Card className={classes.root}>
        <CardContent className={classes.topContainer}>
          <CardActions className={classes.topBorder}>
            <div className={classes.iconContainer}>
              
              <label className={classes.labelCity}>{product.name}</label>
            </div>

          </CardActions>
  
          <CardContent className={classes.bodyContainer}>
            <CardContent className={classes.titleContainer}>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {product.name}
              </Typography>

            </CardContent>
  
          </CardContent>
        </CardContent>
  
        <CardActions className={classes.buttonContainer}>
          <Button
            // onClick={() => history.push(`/job/${product.id}`)}
            className={classes.infoButton}
            variant="contained"
        
          >
            Más información
          </Button>
  
          
        </CardActions>
      </Card>

    )



}