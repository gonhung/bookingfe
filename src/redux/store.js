import { configureStore } from '@reduxjs/toolkit';
import doctorReduce from './redux/doctor.slice';
import userReduce from './redux/user.slice';
import conversationReduce from './redux/conversation.slice';

const reducer = {
    doctor: doctorReduce,
    user: userReduce,
    conversation: conversationReduce,
};
const store = configureStore({
    reducer,
});

export default store;
