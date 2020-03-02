import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AddIngredient:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case ActionTypes.RemoveIngredient:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case ActionTypes.SetIngredients:
      const { salad, bacon, cheese, meat } = action.ingredients;
      return {
        ...state,
        ingredients: {
          salad,
          bacon,
          cheese,
          meat
        },
        error: false
      };
    case ActionTypes.FetchIngredientsFail:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;