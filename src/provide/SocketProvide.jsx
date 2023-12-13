import { createContext, ReactNode } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001' || '', {
    transports: ['websocket'],
    withCredentials: true,
});
const SocketContext = createContext(socket);

function SocketProvider({ children }) {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export { socket, SocketContext, SocketProvider };
