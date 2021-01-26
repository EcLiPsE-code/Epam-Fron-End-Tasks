function printCurrentDate(){
    const date = new Date();

    document.getElementById('current_date').innerHTML =
        getCurrentDate(date) + ' ' + getCurrentTime(date)
}
setInterval(printCurrentDate, 1000)

let ingredients = []
let sauces = []
let base = document.getElementById('base_id').value

function addIngredient(){
    try{
        let selectedIngredient = document.getElementById('ingredient_id').value
        if (checkIngredient(selectedIngredient) === undefined){
            ingredients.push(new Ingredient(costIngredientsPizzas[selectedIngredient]))
            calcCostPizza()
            calcCaloriesPizza()
        }
        else{
            console.log('This sauce has already been added to the pizza')
            alert('This sauce has already been added to the pizza')
        }
    }
    catch (error){
        console.log(`Error name: ${error.name}, message: ${error.message}`)
    }
}
function deleteIngredient(){
    try{
        let selectedIngredient = document.getElementById('ingredient_id').value
        if (checkIngredient(selectedIngredient) !== undefined){
            let findIndex = undefined
            ingredients.forEach((item, index) => {
                if (item.name.toLowerCase() === selectedIngredient){
                    findIndex = index
                }
            })
            ingredients.splice(findIndex, 1)
            //console.log(ingredients)
            calcCostPizza()
            calcCaloriesPizza()
        }
        else{
            //console.log('There is no such ingredient in pizza')
            alert('There is no such ingredient in pizza')
        }
    }
    catch (error){
        console.log(`Error name: ${error.name}, message: ${error.message}`)
    }
}

function addSauce(){
    try{
        let selectedSauce = document.getElementById('sauce_id').value
        if (checkSauce(selectedSauce) === undefined){
            sauces.push(new Sauce(costSaucesPizzas[selectedSauce]))
            console.log(sauces)
            calcCostPizza()
            calcCaloriesPizza()
        }
        else{
            //console.log('This sauce has already been added to the pizza')
            alert('This sauce has already been added to the pizza')
        }
    }
    catch (error){
        console.log(`Error name: ${error.name}, message: ${error.message}`)
    }
}

function deleteSauce(){
    try{
        let selectedSauce = document.getElementById('sauce_id').value
        if (checkSauce(selectedSauce) !== undefined){
            let findIndex = undefined
            sauces.forEach((item, index) => {
                if (item.name.toLowerCase() === selectedSauce){
                    findIndex = index
                }
            })
            sauces.splice(findIndex, 1)
            console.log(sauces)
            calcCostPizza()
            calcCaloriesPizza()
        }
        else{
            //console.log('There is no such ingredient in pizza')
            alert('There is no such ingredient in pizza')
        }
    }
    catch (error){
        console.log(`Error name: ${error.name}, message: ${error.message}`)
    }
}

function determinationBase(){
    const baseName = document.getElementById('base_id').value
    base = costBasesPizzas[baseName]
    calcCostPizza()
    calcCaloriesPizza()
}

function createPizza(){
    const pizzaJSON = new Pizza(base, ingredients, sauces).toJSON()

    fetch('http://localhost/pizzeria/order', {
        method: 'POST',
        body: pizzaJSON
    })
        .then(result => result.json())
        .then(result => {
            console.log('Your order is accepted')
            alert('Your order is accepted')
        })
        .catch(error => {
            console.log(`Error: ${error.message}`)
            alert(`Error: ${error.message}`)
        })
}
