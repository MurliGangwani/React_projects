import App from './App'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
//import  ReactDOM  from 'react-dom';
import './index.css'

//ReactDOM.render(<App/>, document.getElementById("root"));
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
  <App/>
</StrictMode>);

