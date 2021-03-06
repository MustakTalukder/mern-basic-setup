import { createStore, applyMiddleware, compose } from "redux";
import  thunk  from "redux-thunk";

import rootRedcuer from "./reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootRedcuer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
