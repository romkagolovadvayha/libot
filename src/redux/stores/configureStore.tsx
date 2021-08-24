import {createStore, applyMiddleware, Store} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(initialState: any): Store {
    return createStoreWithMiddleware(rootReducer(), initialState);
}
