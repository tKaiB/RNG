import React, { useRef, useState } from "react";
import { Grid,Button } from "@material-ui/core";
import { Card , CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";


function RecipeGenerator(){
    return(
        <div>
            <div style={{ paddingBottom: 10 }}>
                <ResponsiveAppBar />
                <div style={{position:'absolute' , right:'40%' , padding:'3rem'}}>
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


                    <Grid item xs={1} style = {{maxWidth:30}}>
                        <div>

                        </div>
                    </Grid>

                    <Grid item xs={3} style={{paddingTop:100}}>
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
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs = {6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>
                                
                                
                            </CardContent>
                        

                        </Card>
                    </Grid>

                    <Grid item xs={3} style={{paddingTop:100}}>
                         <Card sx = {{maxWidth:360}}>
                            <CardHeader
                            title="Meal 2"
                            subheader = "meal 1"
                            />
                {/* 
                            <CardMedia>

                            </CardMedia> */}

                            <CardContent>
                                <Grid container spacing = {0}>
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs = {6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>
                                
                                
                            </CardContent>
                        

                        </Card>
                    </Grid>

                    <Grid item xs={3} style={{paddingTop:100}}>
                         <Card sx = {{maxWidth:360}}>
                            <CardHeader
                            title="Meal 3"
                            subheader = "meal 1"
                            />
                {/* 
                            <CardMedia>

                            </CardMedia> */}

                            <CardContent>
                                <Grid container spacing = {0}>
                                    <Grid item xs={6} >
                                        <Typography> Nutrition info</Typography>
                                    </Grid>

                                    <Grid item xs = {6} >
                                        <Typography>Time to prep meals</Typography>
                                    </Grid>

                                </Grid>
                                
                                
                            </CardContent>
                        

                        </Card>
                    </Grid>





                </Grid>
            </div>
        </div>

        

    )
}

export default RecipeGenerator