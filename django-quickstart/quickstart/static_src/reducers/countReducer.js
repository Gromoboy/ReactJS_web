import update from 'react-addons-update';
import {COUNT_ALL} from '../actions/countActions';

const initialStore = {
    allMessCount: 0,
    data: undefined,
};

function countReducer(store = initialStore, action) {
    switch (action.type) {
        case COUNT_ALL: {
            return update(store, {
                allMessCount: {$set: store.allMessCount + 1},
                data: {$set: action.data},
            })
        }
        default:
            return store;
    }

}

export default countReducer;