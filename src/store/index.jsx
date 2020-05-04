import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;