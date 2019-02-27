import {createStore, applyMiddleware, compose} from 'redux';
import initReducers from './../reducers';//по умолчанию импортируется
// index.js т.к. не указан файл, только папка
import middlewares from '../middlewares';

function initStore(additionalMiddlewares = []) {
    const initialStore = {};
    return createStore(
        initReducers,
        initialStore,
        applyMiddleware(...additionalMiddlewares, ...middlewares),
    )
}

export default initStore;