import App from "./components/App";
import { createRoot } from 'react-dom/client';

import { Provider } from "react-redux";
import {createStore } from 'redux';
import reducers from "./components/reducers";

const Main = () => {
    return (
        <Provider store={createStore(reducers)}>
            <App/>
        </Provider>
    )
}

const conatiner = document.getElementById('root');
const root = createRoot(conatiner);
root.render(<Main/>);