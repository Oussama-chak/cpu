import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddService from './Addservice'; // Adjust the path if necessary
import ServiceList from './ServiceList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/add-service" element={<AddService />} />
      </Routes>
    </Router>
  );
}

export default App;
