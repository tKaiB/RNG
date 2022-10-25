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
import {limit, orderBy, doc, collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../firebase";


function DynamicRecipeGenerator(){

    const cardInfo =[
        {title : "Meal 1" , text : "Dyanmic card 1"},
        {title : "Meal 2" , text : "Dyanmic card 2"},
        {title : "Meal 3" , text : "Dyanmic card 3"},
    ]
    

    const renderCard= (card, index) =>{
        return(
            <Card sx={{ maxWidth: 360 }} key ={index}> 
            <CardHeader
                title={card.title}
                subheader="meal 1"
            />

            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={6} >
                        <Typography > Nutrition info</Typography>
                        {/* <Typography style={{whiteSpace: 'pre-line'}}> {nutrition}</Typography> */}
                        <Typography style={{whiteSpace: 'pre-line'}}> testing dynamic cards</Typography>
                    </Grid>

                    <Grid item xs={6} >
                        <Typography>Time to prep meals</Typography>
                        <Typography align = "center"> minutes</Typography>
                        <Typography>{card.text}</Typography>
                    </Grid>

                </Grid>


            </CardContent>

            <CardActions disableSpacing>

            <ExpandMoreIcon></ExpandMoreIcon>


            </CardActions>



            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div>
                        <Typography>How to make it :</Typography>
                        <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{steps}</Typography>
                    </div>

                    <div style={{paddingTop:10}}>
                        <Typography > Ingredients:</Typography>
                        <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{ingredients}</Typography>
                    </div>

                </CardContent>
                

            </Collapse> */}


        </Card> 
        )
    }





    return(
        <div>
            {cardInfo.map(renderCard)}
        </div>

    )
}

export default DynamicRecipeGenerator