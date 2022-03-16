import {ChatEngine} from 'react-chat-engine';
require('dotenv').config();

import './App.css';

const App = ()=>
{
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_CHAT_PRODUCT_ID}
            userName={process.env.REACT_CHAT_USER_NAME}
            userSecret={process.env.REACT_CHAT_USER_SECRET}
        />
    )
}

export default App;