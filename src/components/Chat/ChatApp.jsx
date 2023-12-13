/* eslint-disable no-unused-vars */
// ChatApp.js

import React, { useState, useEffect } from 'react';
import ChatConversation from './ChatConversation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getConversationByUserActions } from '../../redux/action/conversation.action';
const data = {
    conversationName: 'room1',
    participants: [
        {
            id: 11,
            firstName: 'Nguyen',
            lastName: 'Thang',
        },
        {
            id: 17,
            firstName: 'Nguyen',
            lastName: 'Thang',
        },
    ],
    message: [
        {
            id: 1,
            content: 'hello',
            createAt: '2023-11-16T12:45:31.000Z',
            sender: {
                id: 11,
                name: 'Nguyen Thang',
                avatar: null,
            },
        },
        {
            id: 2,
            content: 'hi',
            createAt: '2023-11-16T16:03:35.000Z',
            sender: {
                id: 17,
                name: 'Nguyen Thang',
                avatar: null,
            },
        },
        {
            id: 3,
            content: 'how are you',
            createAt: '2023-11-18T15:29:40.000Z',
            sender: {
                id: 11,
                name: 'Nguyen Thang',
                avatar: null,
            },
        },
        {
            id: 4,
            content: 'i am here',
            createAt: '2023-11-18T15:29:40.000Z',
            sender: {
                id: 11,
                name: 'Nguyen Thang',
                avatar: null,
            },
        },
    ],
};

const ChatApp = () => {
    const [conversation, setConversation] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    // const currentUser = { id: 11, firstName: 'Nguyen', lastName: 'Thang' }; // Replace with actual user information
    console.log('navigate', location.pathname);
    const currentUser = null;

    return (
        <div className="p-4 mx-auto">
            <ChatConversation
                conversationName={data?.conversationName}
                messages={conversation?.message}
                participants={conversation?.participants}
                currentUser={currentUser}
            />
        </div>
    );
};

export default ChatApp;
