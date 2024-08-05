import { Recipes } from "../api/Recipes";
import { useEffect, useState } from "react";
import DisplayPanel from './DisplayPanel';
import './styles/Display.css';


export default function Display({ displayTitle, panel_number = 8, setRecipeId }) {
    const [recipes, setRecipes] = useState();
    useEffect(() => {
        Recipes.search('').then(result => { setRecipes(result.data.slice(0, panel_number)) });

    }, []);
    if (recipes) {
        return (
            <div className="display">
                <h2>{displayTitle}</h2>
                <div className="scroll-display">
                    {recipes.map(recipe => {
                        return (
                            <DisplayPanel recipe={recipe} setRecipeId={setRecipeId} key={recipe.id}></DisplayPanel>
                        )
                    }

                    )}
                </div>
            </div>
        );
    }
}