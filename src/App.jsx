import './App.css';
import Layout from './layout/Layout';
import ReduxProvide from './provide/ReduxProvide';
import { SocketProvider } from './provide/SocketProvide';

function App() {
    return (
        <>
            <SocketProvider>
                <ReduxProvide>
                    <Layout />
                </ReduxProvide>
            </SocketProvider>
        </>
    );
}
export default App;
