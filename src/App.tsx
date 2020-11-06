import React from 'react';
import DemoHOC from './hoc/DemoHigherOrderComponent';
import MyForm from './small-formik/SmallFormik';
import ChildEnhancing from './child-enhancing/ChildEnhancing';


function App() {
  return (
    <div className="App">
      {/*<DemoHOC/>*/}
      {/*<MyForm/>*/}
      <ChildEnhancing/>
    </div>
  );
}

export default App;
