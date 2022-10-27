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
import {limit, orderBy, doc, collection, query, where, getDocs , getDoc} from "firebase/firestore";
import { db } from "../firebase";
import { RepeatRounded } from "@material-ui/icons";
import { maxWidth } from "@mui/system";


function DynamicRecipeGenerator(){
    // get calorie from db 
    // get number of meals --> size of array 
    // number of calories per meal 
    const { user,logout } = UserAuth();


    const [cardInfo, setCardInfo] = useState([]);
    // const cardInfo =[]
    const [hasLoaded, setLoaded] = useState(false);
    const [totalCalorie , setTotalCalorie] = useState(0)
    const [meals , setMeals] = useState(0)
    
      const getData = async () => {
        
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
             return [docSnap.data().calorie, docSnap.data().meals]
            } else {
            // doc.data() will be undefined in this case
                console.log("No such document!");
            }

      };

  
    useEffect(() =>{
        if(!user) return;
        const fetchData = async ()=>{
            const[calorie, meals] = await getData()
            setTotalCalorie(calorie)
            setMeals(meals)  
                   
        }
    
        fetchData()

          
        
        

    },[user]);










    const [expanded, setExpanded] = useState(false)
    const [selectedId, setSelectedId] = useState(-1);


    const handleClick = async(totalCalorie,meals) =>{
        setCardInfo([]);
        const docRef = collection(db, "recipe")
        const mealCalorie = Math.floor(totalCalorie/meals)
        const q = query(docRef, where("calories", "<=" , mealCalorie));
        
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot.size)
        let counter =0
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if(counter>meals-1){
                return 
            }
            else{
                let tempObject={}
                tempObject.index = counter
                tempObject.title = doc.data().name
                tempObject.subheader = `Meal ${counter+1}`
                tempObject.protein = doc.data().protein
                tempObject.sodium = doc.data().sodium
                // tempObject.saturatedFat = doc.data().saturated fat,
                tempObject.sugar = doc.data().sugar
                tempObject.totalFat = doc.data().totalFat
                tempObject.time = doc.data().minutes
                tempObject.steps = doc.data().steps
                
                const ingredientsArray = doc.data().ingredients.slice(2, -2).split("', '")
                let ingredientResult = ''
                for (let i = 0; i < ingredientsArray.length; i++) {
                    ingredientResult = ingredientResult + `${i + 1} . ${String(ingredientsArray[i])} \n`
                    // stepResult = stepResult + "hello" + "\n"
                }
                // ingredientResult = ingredientResult.replaceAll(/[']/g,'')
                tempObject.ingredients = ingredientResult
                setCardInfo((cardInfo) => [...cardInfo, tempObject]);
    


            }
            
            counter++;
          });
          

        // generateCardInfo()
    }
    



    
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
            <div key = {index}>
                <Card sx={{margin:'10px' ,  width:400 , minHeight:350}} key = {index} > 
                    <CardHeader
                        title={card.title}
                        subheader={card.subheader}
                    />

                    <CardContent>
                        <Grid container spacing={0}>
                            <Grid item xs={6} >
                                <Typography > Nutrition info</Typography>
                                <Typography style={{whiteSpace: 'pre-line'}}> Protein: {card.protein}</Typography>
                                {/* <Typography style={{whiteSpace: 'pre-line'}}> Saturated fat: {card.saturatedFat}</Typography> */}
                                <Typography style={{whiteSpace: 'pre-line'}}> Sodium: {card.sodium}</Typography>
                                <Typography style={{whiteSpace: 'pre-line'}}> Suagr: {card.sugar}</Typography>
                                <Typography style={{whiteSpace: 'pre-line'}}> Protein: {card.totalFat}</Typography>
                                {/* <Typography style={{whiteSpace: 'pre-line'}}> Nutrition testing</Typography> */}
                            </Grid>

                            <Grid item xs={6} >
                                <Typography>Time to prep meals</Typography>
                                <Typography align = "center">{card.time}</Typography>
                                {/* <Typography align = "center">minutes testing</Typography> */}
                            </Grid>

                        </Grid>


                    </CardContent>

                    <CardActions disableSpacing>
                        <ExpandMore
                        onClick={()=>handleExpandClick(index)}
                        aria-expanded={expanded}
                        expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon></ExpandMoreIcon>

                        </ExpandMore>

                    </CardActions>

                    <Collapse in={index===selectedId?true:false} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div>
                                <Typography>How to make it :</Typography>
                                <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{card.steps}</Typography>
                                {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>steps testing</Typography> */}
                            </div>

                            <div style={{paddingTop:10}}>
                                <Typography > Ingredients:</Typography>
                                <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>{card.ingredients}</Typography>
                                {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>ingredients testing</Typography> */}
                            </div>

                        </CardContent>
                        

                    </Collapse>


            </Card> 
            <div>
                <Button>
                    Refresh
                </Button>
                <Button>
                    Like
                </Button>

            </div>


            </div>

 
        )
    }





    return  (
        <div>
            <div style={{ paddingBottom: 10}}>
                <ResponsiveAppBar />
                <div style={{ position: 'absolute', right: '40%', padding: '3rem' }}>
                    <Button
                    onClick = {() =>handleClick(totalCalorie,meals)}>
                        Generate Recipe
                    </Button>

                </div>

            </div>


            <Grid
            container
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={1}
            style={{ minHeight: "100vh" }}
            >
                
                <Grid item xs={2} sm={6} style={{ padding: 0, maxWidth: 240 }}>
                    <SideBar />
                </Grid>
                <Grid item xs ={1} style = {{maxWidth:30}}>

                </Grid>

                <Grid item xs = {10} style={{paddingTop:100}}>
                    
                    <div style={{display:"flex" , justifyContent: "space-between" , alignItems: "flex-start"}}>
                        {cardInfo.map(renderCard)}
                    

                    </div>
                    


                </Grid>

                
                
                
            </Grid>
        </div>
 
        

        
    )
}

export default DynamicRecipeGenerator