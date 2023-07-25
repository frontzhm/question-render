import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QuestionRender } from '../.';
import {list} from './MockQuestionInfo'

const App = () => {
  return (
    <div>
      {list.map(item=><QuestionRender info={item} key={item.questionId}/>)}
      
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
