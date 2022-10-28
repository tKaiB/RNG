import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { minHeight } from "@mui/system";

function CalorieCard(props) {
  const name = props.name;
  const calories = props.calories;
  const description = props.description;
  const keyId = props.keyId;

  return (
    <Card sx={{ fontFamily: "Inter" }}>
      <CardHeader title={name} key={keyId} subheader="Meal 1" />
      <CardContent>
        <CardMedia></CardMedia>
        <Grid container spacing={0}>
          <Grid item xs="6">
            <Typography>{calories}</Typography>
          </Grid>
          <Grid item xs="6" sx={{ overflow: "auto" }}>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CalorieCard;

// <Card sx={{ maxWidth: 360 }}>
//     <CardHeader
//         title={recipe.name}
//         subheader="Meal 1"
//     />
//     {/*
//     <CardMedia>

//     </CardMedia> */}
//     <CardContent>
//         <Grid container spacing={0}>
//             <Grid item xs={6} direction="column">
//                 <Typography> input info here </Typography>
//             </Grid>

//             <Grid item xs={6} direction="column">
//                 <Typography>Time to prep meals</Typography>
//             </Grid>
//         </Grid>
//     </CardContent>
// </Card>
