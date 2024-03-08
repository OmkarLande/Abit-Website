import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FacultyCard from './pages/FacultyCard'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<FacultyCard />} />
        <Route path="/*" element={<DefaultComponent />} />
      </Routes>
    </Router>
  );
}

const DefaultComponent = () => {
  return <div>404 Not Found</div>;
};

export default App;
