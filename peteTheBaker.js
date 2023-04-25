function cakes(recipe, available) {
    
    let availKeys = Object.keys(available)
    let recipeKeys = Object.keys(recipe)

    if (availKeys.includes(...recipeKeys)) {
        
        let ingredientCap = []

        for (const key in recipe) {
            ingredientCap.push(Math.floor(available[key] / recipe[key]))
        }

        return Math.min(...ingredientCap)
    }

    return 0

}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})