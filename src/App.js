import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Test = () => {
  return (
    <>
    <h4>About</h4>
    <p>Let's get this workin!!</p>
    </>
  );
}

function App() {
  return (
    <div className="App">

    {/* <Router>
      <Routes>
        <NavBar/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/x" element={<x/>}/>
        <Route path="/y" element={<y/>}/>
        <Route path="/z" element={<z/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         test
        </p>
        {/* <Navigation /> */}
        <Test />
      </header>

    </div>
  );
}

export default App;

// aws auth login feature
// import logo from "./logo.svg";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
// } from "@aws-amplify/ui-react";

// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }

// export default withAuthenticator(App);


// old app content
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <Navigation /> */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Test />
//       </header>
//     </div>
//   );
// }