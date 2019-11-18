import { combineReducers } from 'redux';
import inventReducer from './inventReducer';
import marketReducer from './marketReducer';
import stockReducer from './stockReducer';
import fieldReducer from './fieldRecucer';

const allReducers = combineReducers({
  stock: stockReducer,
  invent: inventReducer,
  market: marketReducer,
  field: fieldReducer
});

export default allReducers;