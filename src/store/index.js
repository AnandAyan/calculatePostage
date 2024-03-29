import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../redusers';

const middleware = applyMiddleware(thunk, logger);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() || compose ;
    const store = createStore(
        rootReducer,
        compose(
            middleware,
            reduxDevTools
        )
    );
    
    export default store;