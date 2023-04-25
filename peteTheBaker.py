def cakes(recipe, available):
    output = []
    for k in recipe:
        output.append(available[k] // recipe[k])
    return min(output)

cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200})