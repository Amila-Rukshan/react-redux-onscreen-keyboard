import React from 'react';

import Form from './Form'
import KeyBoard from './KeyBoard';

function App() {
  return (
    <div className="App">
      <h3><span style={{ color: '#3973ba' }}>React</span> + <span style={{ color: '#8d6fc3' }}>Redux</span> On Screen Keyboard</h3>
      <p>Need to click twice to change the input focus (need to handle it later)</p>
      <Form/>
      <KeyBoard/>
    </div>
  );
}

export default App;
