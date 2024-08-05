import './styles/DisplayPanel.css'

export default function DisplayPanel({ recipe, setRecipeId }) {
    return (

        <div onClick={()=>{setRecipeId(recipe.id)}} className="panel" style={{ backgroundImage: `url(${recipe['image_url']})` }}>
            <h3>{recipe['name']}</h3>
        </div>

    );
}