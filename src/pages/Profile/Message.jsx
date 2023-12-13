import React, { useEffect, useState } from 'react';
import ChatLayout from '../../layout/Chat/ChatLayout';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function Message() {
    return (
        <ChatLayout>
            <Outlet />
        </ChatLayout>
    );
}

export default Message;
