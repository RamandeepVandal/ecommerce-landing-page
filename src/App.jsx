import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from './screens/Homepage'
import { Productpage } from './screens/Productpage';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
    </Router>
  )
}

export default App
