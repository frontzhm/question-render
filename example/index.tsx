import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};
// @ts-ignore
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(<App />, document.getElementById('root'));
