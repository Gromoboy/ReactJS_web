export const SEND_MESSAGE = '@@message/TEST';

export const sendMessage = (chatId, message, time) => ({
    type: SEND_MESSAGE,
    chatId,
    message,
    time,
})

export const REPLAY_MESSAGE ='@@message/TEST';
export const replayMessage = (chatId,  time) => ({
    type: REPLAY_MESSAGE,
    chatId,
    time,
})