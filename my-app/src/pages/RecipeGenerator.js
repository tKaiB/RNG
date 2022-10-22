import React, { useRef, useState } from "react";
import { Grid, Button, CardActions } from "@material-ui/core";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import CalorieCard from "../components/CalorieCard";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

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


function RecipeGenerator() {
    const recipes = { id: 1, name: 'fried rice', calories: 590, description: ['make a choice and proceed with recipe', 'depending on size of squash , cut into half or fourths', 'remove seeds', 'for spicy squash , drizzle olive oil or melted butter over each cut squash piece', 'season with mexican seasoning mix ii', 'for sweet squash , drizzle melted honey , butter , grated piloncillo over each cut squash piece', 'season with sweet mexican spice mix', 'bake at 350 degrees , again depending on size , for 40 minutes up to an hour , until a fork can easily pierce the skin', 'be careful not to burn the squash especially if you opt to use sugar or butter', 'if you feel more comfortable , cover the squash with aluminum foil the first half hour , give or take , of baking', 'if desired , season with salt'] };
    const [expanded, setExpanded] = useState(false)
    const [expanded2, setExpanded2] = useState(false)
    const [expanded3, setExpanded3] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
      }
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2)
      }

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3)
      }



    return (
        <div>
            <div style={{ paddingBottom: 10 }}>
                <ResponsiveAppBar />
                <div style={{ position: 'absolute', right: '40%', padding: '3rem' }}>
                    <Button>
                        Generate Recipe
                    </Button>

                </div>

            </div>

            <div>
                <Grid container
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={1}
                    style={{ minHeight: "100vh" }}
                >
                    <Grid item xs={2} sm={6} style={{ padding: 0, maxWidth: 240 }}>
                        <SideBar />
                    </Grid>

                    <Grid item xs={1} style={{ maxWidth: 30 }}>
                        <div>
                            <p></p>
                        </div>
                    </Grid>

                    <Grid item xs={3} style={{ paddingTop: 100 }}>
                        
                        {/* <CalorieCard name = {recipes.name} keyId = {recipes.keyId} description = {recipes.description} calories = {recipes.calories}/> */}
                        {/* How to make it dynamic when changing the recipe */}
                        <Card sx={{ maxWidth: 360 }}> 
                            <CardHeader
                                title="Maggi Goreng"
                                subheader="meal 1"
                            />

                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>


                            </CardContent>

                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon></ExpandMoreIcon>

                                </ExpandMore>

                            </CardActions>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>
                                        <Typography>How to make it :</Typography>
                                    </div>

                                    <div style={{paddingTop:10}}>
                                        <Typography> Ingredients:</Typography>
                                    </div>

                                </CardContent>
                                

                            </Collapse>


                        </Card> 
                    </Grid>

                    <Grid item xs={3} style={{ paddingTop: 100 }}>
                        <Card sx={{ maxWidth: 360 }}>
                            <CardHeader
                                title="Meal 2"
                                subheader="meal 1"
                            />

                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>
                            </CardContent>

                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded2}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon></ExpandMoreIcon>

                                </ExpandMore>

                            </CardActions>

                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>
                                        <Typography>How to make it :</Typography>
                                    </div>

                                    <div style={{paddingTop:10}}>
                                        <Typography> Ingredients:</Typography>
                                    </div>

                                </CardContent>
                                

                            </Collapse>

                            


                        </Card>
                    </Grid>

                    <Grid item xs={3} style={{ paddingTop: 100 }}>
                        <Card sx={{ maxWidth: 360 }}>
                            <CardHeader
                                title="Meal 3"
                                subheader="meal 1"
                            />
                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>


                            </CardContent>

                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded3}
                                onClick={handleExpandClick3}
                                aria-expanded={expanded3}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon></ExpandMoreIcon>

                                </ExpandMore>

                            </CardActions>

                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>
                                        <Typography>How to make it :</Typography>
                                    </div>

                                    <div style={{paddingTop:10}}>
                                        <Typography> Ingredients:</Typography>
                                    </div>

                                </CardContent>
                                

                            </Collapse>


                        </Card>
                    </Grid> 





                </Grid>
            </div>
        </div>



    )
}

export default RecipeGenerator