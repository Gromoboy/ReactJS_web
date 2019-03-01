import update from 'react-addons-update';
import {SEND_MESSAGE, REPLAY_MESSAGE, ADD_CHAT} from '../actions/messageActions';

const initialStore = {
    lastId: 1,
    messageLists: {'Общий': [], 'Anime': [], 'ReactJS': [],},
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
                    time,
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
                    time,
                    chatId,
                }
            };

            return update(store, {
                lastId: {$set: lastId + 1},
                messageLists: {$set: newMessageLists},
                messages: {$set: newMessages},
            });

        }
        case ADD_CHAT: {
            const newChatId = Object.keys(store.messageLists).length + 1;
            const newMessagesLists = {...store.messageLists, [newChatId]: []};
            return update(store, {
                messageLists: {$set: newMessagesLists},
            })
        }
        default:
            return store;
    }
}

export default messageReducer;