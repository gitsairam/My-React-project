import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
};
const PageTwo = () => {
  return (
    <div>
      PageTwo <Link to="/">Go back</Link>
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/page2" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};
export default App;
