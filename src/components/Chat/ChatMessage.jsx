/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ChatMessage.js

import React from 'react';

const ChatMessage = ({ content, createAt, sender, currentUser }) => {
    const isCurrentUserSender = sender.id === +currentUser;

    const textLeft = { textAlign: 'left' };
    const textRight = { textAlign: 'right' };

    const senderStyle = isCurrentUserSender ? textRight : textLeft;
    return (
        <div>
            <div style={senderStyle}>
                <p>{content}</p>
                {/* <p>
                    Sender: {sender?.name} {isCurrentUserSender && '(You)'}
                </p> */}
                <figure className="w-5 h-5 rounded-full cursor-pointer bg-black">
                    {/* <img
                                                src={userImg}
                                                className="w-full rounded-full object-contain"
                                                alt=""
                                            /> */}
                </figure>
                <p>
                    {isCurrentUserSender
                        ? null
                        : new Date(createAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

const ChatHistory = ({ messages, currentUser }) => {
    return (
        <div>
            {messages
                // ?.slice()
                // ?.reverse()
                ?.map((message, index) => (
                    <ChatMessage
                        key={index}
                        content={message?.content}
                        createAt={message?.createAt}
                        sender={message?.sender}
                        currentUser={currentUser}
                    />
                ))}
        </div>
    );
};

export default ChatHistory;
