import { SEND_MESSAGE, replayMessage, REPLAY_MESSAGE } from "../actions/messageActions";
import {LOCATION_CHANGE} from "react-router-redux";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            // console.log('send message');
            setTimeout(()=> store.dispatch(replayMessage(action.chatId, new Date().toLocaleTimeString())),1000);
            break;
        case REPLAY_MESSAGE:
            console.log('bot');
            break;
        case LOCATION_CHANGE:
            console.log('Смена локации');
            break;
        default:
            break;
    }
    return next(action);
};
