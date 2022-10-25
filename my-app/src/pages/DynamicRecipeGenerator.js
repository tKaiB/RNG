import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, CardActions } from "@material-ui/core";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import CalorieCard from "../components/CalorieCard";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { UserAuth } from "../contexts/AuthContext";
import {limit, orderBy, doc, collection, query, where, getDoc} from "firebase/firestore";
import { db } from "../firebase";


function DynamicRecipeGenerator(){
    // get calorie from db 
    // get number of meals --> size of array 
    // number of calories per meal 
    const { user,logout } = UserAuth();


    const [cardInfo, setCardInfo] = useState([]);
    const [hasLoaded, setLoaded] = useState(false);
    const [totalCalorie , setTotalCalorie] = useState(0)
    const [meals , setMeals] = useState(0)
    

    // get data from db 

    const getData = async () => {
        //console.log("test");
       
        const docRef = doc(db, "users", user.uid);
        return user.uid
        

      };

    useEffect(() =>{
        const fetchData = async ()=>{
            const test = await getData()
            
        }
    
        fetchData()
    },[]);



 
  

    







    const [expanded, setExpanded] = useState(false)
    const [selectedId, setSelectedId] = useState(-1);
    

    // const cardInfo =[
    //     {index : 1, title : "Meal 1" , text : "Dyanmic card 1" },
    //     {index : 2, title : "Meal 2" , text : "Dyanmic card 2" },
    //     {index : 3, title : "Meal 3" , text : "Dyanmic card 3" },
    // ]

    
    const handleExpandClick = (index) => {

        if(selectedId==index){
            setSelectedId(-1)
        }
        else{
            setSelectedId(index)
        }
       
      }
    
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

    

    const renderCard= (card, index) =>{
        return(
            <Card sx={{ maxWidth: 360 }} key = {index} > 
            <CardHeader
                title={card.name}
                subheader={card.text}
            />

            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={6} >
                        <Typography > Nutrition info</Typography>
                        {/* <Typography style={{whiteSpace: 'pre-line'}}> {nutrition}</Typography> */}
                        <Typography style={{whiteSpace: 'pre-line'}}> Nutrition testing</Typography>
                    </Grid>

                    <Grid item xs={6} >
                        <Typography>Time to prep meals</Typography>
                        {/* <Typography align = "center">{minutes}</Typography> */}
                        <Typography align = "center">minutes testing</Typography>
                    </Grid>

                </Grid>


            </CardContent>

            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={()=>handleExpandClick(index)}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon></ExpandMoreIcon>

                </ExpandMore>

            </CardActions>

            <Collapse in={index==selectedId ? true:false} timeout="auto" unmountOnExit>
                <CardContent>
                    <div>
                        <Typography>How to make it :</Typography>
                        {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{steps}</Typography> */}
                        <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>steps testing</Typography>
                    </div>

                    <div style={{paddingTop:10}}>
                        <Typography > Ingredients:</Typography>
                        {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{ingredients}</Typography> */}
                        <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>ingredients testing</Typography>
                    </div>

                </CardContent>
                

            </Collapse>


        </Card> 
 
        )
    }





    return  (
        // <div>
        //     {cardInfo.map(renderCard)}
        // </div>
        <div>
            <ResponsiveAppBar />
            <h1>
                {totalCalorie}
            </h1>
        </div>
        

        
    )
}

export default DynamicRecipeGenerator