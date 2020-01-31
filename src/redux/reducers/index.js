import { combineReducers } from "redux";
import users from './userReducer';
import products from './productReducer';


const rootReducer = combineReducers({
 users: users,
 products: products
});

export default rootReducer;