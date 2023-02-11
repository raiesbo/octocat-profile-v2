import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
