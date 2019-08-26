
const initialState = {
    id: 0,
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const AUTHOR_FIRST = 'AUTHOR_FIRST'
export const AUTHOR_LAST = 'AUTHOR_LAST'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'
export const CLEAR_DATA = 'CLEAR_DATA'
export const DELETE_RECIPE = 'DELETE_RECIPE'

const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case RECIPE_NAME: return {...state, name: payload}
        case RECIPE_CATEGORY: return {...state, category: payload}
        case AUTHOR_FIRST: return {...state, authorFirst: payload}
        case AUTHOR_LAST: return {...state, authorLast: payload}
        case ADD_INGREDIENTS: return {...state, ingredients: [...state.ingredients, payload]}
        case ADD_INSTRUCTIONS: return {...state, instructions: [...state.ingredients, payload]}
        case ADD_RECIPE: 
            //destruct all names for easier typing
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state
            //make a recipe object
            const id = state.recipes.length +1
            console.log(id)
            const recipe = {id, name, category, authorFirst, authorLast, ingredients, instructions}
            return {...state, recipes: [...state.recipes, recipe]}
        case CLEAR_DATA:
            return {...state, id:0, name: '', category: '', authorFirst: '', authorLast: '', ingredients: [], instructions: []}
        case DELETE_RECIPE:
            console.log(payload)
            const reducedRecipes = state.recipes.filter(e => e.id !== payload)
            console.dir(reducedRecipes)
            return  {...state, recipes: reducedRecipes}
        default: return state
    }
}

export default reducer