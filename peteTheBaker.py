def cakes(recipe, available):
        output = []
        for k in recipe:
            if k in available:
                output.append(available[k] // recipe[k])
            else: return 0
        return min(output)

def cakes(recipe, available):
    return min(available.get(k, 0)//recipe[k] for k in recipe)

cakes({'cream': 200, 'flour': 300, 'sugar': 150, 'milk': 100, 'oil': 100}, {'sugar': 1700, 'flour': 20000, 'milk': 20000, 'oil': 30000, 'cream': 5000})