export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (chatId, message, time) => ({
    type: SEND_MESSAGE,
    chatId,
    message,
    time,
})

export const REPLAY_MESSAGE ='@@message/REPLAY_MESSAGE';
export const replayMessage = (chatId,  time) => ({
    type: REPLAY_MESSAGE,
    chatId,
    time,
})

export const ADD_CHAT = '@@chat/ADD_CHAT';
export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
})

export const HIGHLIGHT_CHAT = '@@chat/HIGHLIGHT_CHAT';
export const highlightChat = chatId => ({
    type: HIGHLIGHT_CHAT,
    chatId
})