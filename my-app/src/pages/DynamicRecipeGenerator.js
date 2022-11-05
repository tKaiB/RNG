import React, { useEffect, useState } from "react";
import { Grid, Button, CardActions } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../components/AccountNavBar";
import SideBar from "../components/Sidebar";
import CalorieCard from "../components/CalorieCard";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { UserAuth } from "../contexts/AuthContext";
import {
  limit,
  orderBy,
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { RepeatRounded } from "@material-ui/icons";
import { maxWidth } from "@mui/system";
import RefreshIcon from "@mui/icons-material/Refresh";
import RecommendIcon from "@mui/icons-material/Recommend";

function DynamicRecipeGenerator() {
  const { user, logout } = UserAuth();

  const [cardInfo, setCardInfo] = useState([]);

  const [hasLoaded, setLoaded] = useState(false);
  const [totalCalorie, setTotalCalorie] = useState(0);
  const [meals, setMeals] = useState(0);

  const getData = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return [docSnap.data().calorie, docSnap.data().meals];
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [calorie, meals] = await getData();
      setTotalCalorie(calorie);
      setMeals(meals);
    };

    fetchData();
  }, [user]);

  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }

  const getRecipeFromDB = async (totalCalorie, meals) => {
    let recipe = [];
    const docRef = collection(db, "recipe");
    const mealCalorie = Math.floor(totalCalorie / meals);
    const q = query(docRef, where("calories", "<=", mealCalorie));

    const docRef2 = collection(db, "healthy");
    const q2 = query(docRef2);
    let healthy = [];
    if (healthy.length == 0) {
      const querySnapshot2 = await getDocs(q2);
      querySnapshot2.forEach((doc) => {
        healthy.push(doc.data().brand_and_product_name);
      });
    }
    console.log(healthy);

    const querySnapshot = await getDocs(q);
    let counter = 0;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let tempObject = {};
      tempObject.index = counter;
      tempObject.title = doc.data().name;
      tempObject.subheader = `Meal ${counter + 1}`;
      tempObject.protein = doc.data().protein;
      tempObject.sodium = doc.data().sodium;
      // tempObject.saturatedFat = doc.data().saturated fat,
      tempObject.sugar = doc.data().sugar;
      tempObject.totalFat = doc.data().totalFat;
      tempObject.time = doc.data().minutes;


      const recipeArray = doc.data().steps.split("%")
      let recipeResult = ''
      for (let i = 0; i < recipeArray.length; i++) {
        recipeResult = recipeResult + `${i + 1} . ${String(recipeArray[i])}  \n`;


      }
      tempObject.steps = recipeResult

      const ingredientsArray = doc
        .data()
        .ingredients.slice(0, -2)
        .split("%");
      let ingredientResult = "";
      let healthierIngredients = "";
      let healthyCounter = 0;
      for (let i = 0; i < ingredientsArray.length; i++) {
        // filter logic
        const result = filterItems(healthy, String(ingredientsArray[i]));

        if (result.length > 0) {
          ingredientResult =
            ingredientResult + `${i + 1} . ${String(ingredientsArray[i])} * \n`;
          // do for loop
          for (
            healthyCounter;
            healthyCounter < result.length;
            healthyCounter++
          ) {
            healthierIngredients =
              healthierIngredients +
              `${healthyCounter + 1} . ${String(result[healthyCounter])} \n`;
          }
        } else {
          ingredientResult =
            ingredientResult + `${i + 1} . ${String(ingredientsArray[i])} \n`;
        }

        // stepResult = stepResult + "hello" + "\n"
      }
      // ingredientResult = ingredientResult.replaceAll(/[']/g,'')
      tempObject.ingredients = ingredientResult;
      tempObject.ingredientsArray = ingredientsArray;
      tempObject.healthyIngredients = healthierIngredients;
      recipe.push(tempObject);

      counter++;
    });

    return recipe;
  };

  const [noOfCards, setNoOfCards] = useState(0);

  const handleClick = async (totalCalorie, meals) => {
    setCardInfo([]);
    const recipe = await getRecipeFromDB(totalCalorie, meals);
    if (recipe.length == 0 || noOfCards > recipe.length) {
      alert("No Recipe Found!!");
    } else {
      let tempArray = recipe.slice(noOfCards, noOfCards + meals);
      for (let i = 0; i < tempArray.length; i++) {
        setCardInfo((cardInfo) => [...cardInfo, tempArray[i]]);
      }

      setNoOfCards(noOfCards + meals);
    }
  };

  const handleIndividualRefresh = async (index, totalCalorie, meals) => {
    const recipe = await getRecipeFromDB(totalCalorie, meals);
    const newCardInfo = recipe[noOfCards];
    // update that particular item in array
    const newCardsInfo = cardInfo.map((card, i) => {
      if (i == index) {
        return newCardInfo;
      } else {
        return card;
      }
    });
    setCardInfo(newCardsInfo);

    setNoOfCards(noOfCards + 1);
  };

  const handleExpandClick = (index) => {
    if (selectedId == index) {
      setSelectedId(-1);
    } else {
      setSelectedId(index);
    }
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <Card
          style={{
            margin: "10px",
            width: 400,
            minHeight: 350,
            borderRadius: "25px",
            backgroundColor: "#E6E6FA",
          }}
          key={index}
        >
          <CardHeader title={card.title} subheader={card.subheader} />

          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography> Nutrition info</Typography>
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {" "}
                  Protein: {card.protein}
                </Typography>
                {/* <Typography style={{whiteSpace: 'pre-line'}}> Saturated fat: {card.saturatedFat}</Typography> */}
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {" "}
                  Sodium: {card.sodium}
                </Typography>
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {" "}
                  Suagr: {card.sugar}
                </Typography>
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {" "}
                  Protein: {card.totalFat}
                </Typography>
                {/* <Typography style={{whiteSpace: 'pre-line'}}> Nutrition testing</Typography> */}
              </Grid>

              <Grid item xs={6}>
                <Typography>Time to prep meals</Typography>
                <Typography align="center">{card.time}</Typography>
                {/* <Typography align = "center">minutes testing</Typography> */}
              </Grid>
            </Grid>
          </CardContent>

          <CardActions disableSpacing>
            <ExpandMore
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded}
              expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon></ExpandMoreIcon>
            </ExpandMore>
          </CardActions>

          <Collapse
            in={index === selectedId ? true : false}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <div>
                <Typography>How to make it :</Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  {card.steps}
                </Typography>
                {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>steps testing</Typography> */}
              </div>

              <div style={{ paddingTop: 10 }}>
                <Typography> Ingredients:</Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  {card.ingredients}
                  {/* <img
                    src="https://www.unisoy.com.sg/image/catalog/award/award-02.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }} */}
                </Typography>
                <div>
                  <Typography>Healthier Choice Ingredients:</Typography>
                  <Typography variant="body1" style={{ whiteSpace: "preline" }}>
                    {card.healthyIngredients}
                  </Typography>
                </div>

                {/* <Typography variant = "body1" style={{whiteSpace: 'pre-line'}}>ingredients testing</Typography> */}
              </div>
            </CardContent>
          </Collapse>
        </Card>
        <div>
          <Button
            onClick={() => {
              handleIndividualRefresh(index, totalCalorie, meals);
            }}
          >
            {" "}
            <RefreshIcon />
          </Button>
          <Button>
            <RecommendIcon />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ paddingBottom: 10 }}>
        <ResponsiveAppBar />
      </div>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
        style={{ minHeight: "100vh" }}
      >
        <Grid item sm={6} style={{ padding: 0, maxWidth: 240 }}>
          <SideBar />
        </Grid>
        <div style={{ position: "absolute", right: "40%", padding: "3rem" }}>
          <Button onClick={() => handleClick(totalCalorie, meals)}>
            Generate Recipe
          </Button>
        </div>
        <Grid>
          <div
            style={{
              paddingTop: 100,
              postiton: "sticky",
              display: "inline-flex",
              margin: "auto",
              alignItems: "flex-start",
            }}
          >
            {cardInfo.map(renderCard)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DynamicRecipeGenerator;
