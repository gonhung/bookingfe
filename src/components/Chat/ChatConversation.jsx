/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ChatConversation.js

import React from 'react';
// import ChatMessage from './ChatMessage';
import ChatHistory from './ChatMessage';

const ChatConversation = ({
    conversationName,
    participants,
    messages,
    currentUser,
}) => {
    return (
        <div className="container mx-auto rounded-lg">
            {/* <h2>{conversationName}</h2>
            <p>Participants:</p>
            <h1>---------------------------------------</h1>
            <ul>
                {participants?.map((participant) => (
                    <li
                        key={participant?.id}
                    >{`${participant?.firstName} ${participant?.lastName}`}</li>
                ))}
            </ul>
            <h1>---------------------------------------</h1> */}
            <div>
                {/* {messages?.map((message) => (
                    <ChatMessage
                        key={message?.id}
                        {...message}
                        currentUser={currentUser}
                    />
                ))} */}
                <ChatHistory messages={messages} currentUser={currentUser} />
            </div>
        </div>
    );
};

export default ChatConversation;
