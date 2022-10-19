import React ,{useState , useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Button,Grid } from "@material-ui/core";
import { Card , CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

function CalorieCard(){

    return(
        <Card sx = {{maxWidth:360}}>
            <CardHeader
            title="Maggi Goreng"
            subheader = "meal 1"
            />
{/* 
            <CardMedia>

            </CardMedia> */}

            <CardContent>
                <Grid container spacing = {0}>
                    <Grid item xs={6} direction ="column">
                        <Typography> Nutrition info</Typography>
                    </Grid>

                    <Grid item xs = {6} direction ="column">
                        <Typography>Time to prep meals</Typography>
                    </Grid>

                </Grid>
                
                
            </CardContent>
        

        </Card>
    )



}

export default CalorieCard