import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
      <CardActionArea onClick={() => history.push(`${product.id}`)}>
        <CardMedia
          component="img"
          alt="Producto"
          height="140"
          image="https://www.tec.com.pe/wp-content/uploads/2021/04/adidas-lego-5-1024x719-1.jpg"
          title="Prodcuto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            $ {product.price}
          </Typography>
        </CardContent>
        
      </CardActionArea>
 
      </Card>

    )



}