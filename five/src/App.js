import ButtonPage from "./Pages/ButtonPage";
import AccordianPage from "./Pages/AccordianPage";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";
import {Route,Routes,Link} from 'react-router-dom'
import TablePage from "./Pages/TablePage";

function App() {
  return (
    <div>
      <div>
        <Link to="/">Button</Link>
        <Link to="/accordion">Accordian</Link>
        <Link to="/dropdown">Dropdown</Link>
        <Link to="/modal">Modal</Link>
        <Link to="/table">Table</Link>
        
      </div>
      <Routes>
        <Route path="/" element={<ButtonPage/>}/>
        <Route path="/accordion" element={<AccordianPage/>}/>
        <Route path="/dropdown" element={<DropdownPage/>}/>
        <Route path="/modal" element={<ModalPage/>}/>
        <Route path="/table" element={<TablePage/>}/>
      </Routes> 
    </div>
    
  );
}

export default App;
