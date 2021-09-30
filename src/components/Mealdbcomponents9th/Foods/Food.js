import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Food = (props) => {
    const {idMeal,strMealThumb,strInstructions,strMeal,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = props.meal
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={strMeal}
        subheader="September 30, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            `{strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4}{strIngredient5}`
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button >
          <Link to={`/food/${idMeal}`}><Fab variant="extended" size="medium" color="primary" aria-label="add">
         <NavigationIcon sx={{ mr: 1 }} />
          Details
         </Fab></Link>
         </Button>
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
    );
};

export default Food;