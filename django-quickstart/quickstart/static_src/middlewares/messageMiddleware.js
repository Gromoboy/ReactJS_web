import { SEND_MESSAGE, replayMessage,
    REPLAY_MESSAGE,
    HIGHLIGHT_CHAT,highlightChat,
    UNHIGHLIGHT_CHAT,unhighlightChat

} from "../actions/messageActions";
import {LOCATION_CHANGE} from "react-router-redux";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            // console.log('send message');
            setTimeout(()=> store.dispatch(replayMessage(action.chatId, new Date().toLocaleTimeString())),1000);
            break;
            //TODO: реализовать акшэн Хайлайт и анхайлайт
        case REPLAY_MESSAGE:
            store.dispatch(highlightChat(action.chatId));
            break;
        case HIGHLIGHT_CHAT:
            setTimeout(()=>store.dispatch(unhighlightChat()), 1000);
            break;
        case LOCATION_CHANGE:
            console.log('Смена локации');
            break;
        default:
            break;
    }
    return next(action);
};
