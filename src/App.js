import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className='container'>
      <Header />
    </div>
  )
}
// function App() {

//   const name = 'yb';
//   const x = true;
//   return (
//     <div className="container">
//       <Header />
//       <h1>Hello from React</h1>
//       <h2>Hello {name}</h2>
//       <h2>Hello {x ? 'Yes': 'No'}</h2>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;
