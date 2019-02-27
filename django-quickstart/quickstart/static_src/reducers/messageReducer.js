import update from 'react-addons-update';
import {SEND_MESSAGE, REPLAY_MESSAGE} from '../actions/messageActions';

const initialStore = {
    lastId: 1,
    messageLists: {1:[], 2: [], 3:[], },
    messages: {},

}

function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            // айди чата и сообщение передаются через экшн(параметры?)
            const {chatId, message, time} = action;
            const {messages, lastId, messageLists} = store;
            const newMessageList = [...messageLists[chatId], lastId];
            const newMessageLists = {...messageLists, [chatId]: newMessageList};
            const newMessages = {
                ...messages,
                [lastId]: {
                    sender: 'me',
                    message,
                    time,//:new Date().toLocaleTimeString(), //TODO: move to action
                    chatId
                }
            };

            return update(store, {
                lastId: {$set: lastId + 1},
                messageLists: {$set: newMessageLists},
                messages: {$set: newMessages},
            });
        }
        case REPLAY_MESSAGE: {
            const {chatId, time} = action;
            const {messages, lastId, messageLists} = store;
            const newMessageList = [...messageLists[chatId], lastId];
            const newMessageLists = {...messageLists, [chatId]: newMessageList};
            const newMessages = {
                ...messages,
                [lastId]: {
                    sender: 'бот',
                    message: 'Отвали, кожанный',
                    time:new Date().toLocaleTimeString(), //TODO: move to action
                    chatId,
                }
            };

            return update(store, {
                lastId: {$set: lastId + 1},
                messageLists: {$set: newMessageLists},
                messages: {$set: newMessages},
            });

        }
        default: return store;
    }
}

export default messageReducer;