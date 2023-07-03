import { useEffect, useState } from "react";
import DishElement from "./DishElement";

function Main(){
    let [daishes, setDishes] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v2/1/random.php")
    .then(response => response.json())
    .then(data => setDishes(data.meals))
  },[])
    return (
        <DishElement meals={daishes}/>
    )
}
 export default Main;
