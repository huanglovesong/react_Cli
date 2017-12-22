import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nprogress } from 'redux-nprogress';
import Receive from './Receive';
import account from './account';
import commodityAdd from './commodityAdd';
import commodityList from './commodityList';
import order from './order';
import orderSales from './orderSales';
import passwordCard from './passwordCard';
import productTpl from './productTpl';
import secretPriceSetting from './secretPriceSetting';
import stock from './stock';
import stockAccount from './stockAccount';
import stockCard from './stockCard';
import stockList from './stockList';
import supplyReview from './supplyReview';
import userAccount from './userAccount';
import userPermission from './userPermission';
import finance from './finance';

export default combineReducers({
  routing: routerReducer,
  nprogress,
  Receive,
  account,
  commodityAdd,
  commodityList,
  order,
  orderSales,
  passwordCard,
  productTpl,
  secretPriceSetting,
  stock,
  stockAccount,
  stockCard,
  stockList,
  supplyReview,
  userAccount,
  userPermission,
  finance
});
