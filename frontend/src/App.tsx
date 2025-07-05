// Test workflow trigger
import { HashRouter, Routes, Route } from "react-router-dom";

// Simple test components
const Home = () => (
  <div>
    <h1>HOME PAGE WORKS!</h1>
    <a href="/#/about">Go to About</a>
  </div>
);
const About = () => (
  <div>
    <h1>ABOUT PAGE WORKS!</h1>
    <a href="/#/">Go to Home</a>
  </div>
);
const NotFound = () => (
  <div>
    <h1>404 - NOT FOUND</h1>
    <a href="/#/">Go to Home</a>
  </div>
);

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
