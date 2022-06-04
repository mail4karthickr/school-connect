import logger from 'redux-logger';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer} from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { saveState } from '../utils/localstorage';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger, 
    sagaMiddleware
].filter(Boolean);

const componseEnhancer = 
    (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;
    
const composedEnhancers = componseEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState({
      user:store.getState().user.currentUser
    });
});