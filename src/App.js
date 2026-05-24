import Login from './pages/login';
import './App.css';
import Headr from '../src/components/Headr';
import Footr from '../src/components/Footer';
import Inf_Home from './pages/Home/Info_home';
import { Route, Routes } from 'react-router-dom';
import Info_Actio from './pages/Action/Info_Actio';
import Anmiee from './pages/Anmie/info_Anmmi';
import N_kids from './pages/Kids/inf_kids';
import Table from './components/Table';


function App() {
  return (
    <>
      {/* <Table></Table> */}

      <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>

      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>



      <Routes>
        <Route path='/Footer' element={<Footr></Footr>}></Route>
      </Routes>

      <Routes>
        <Route path='/Home' element={<Inf_Home></Inf_Home>}></Route>
      </Routes>

      <Routes>
        <Route path='/Anmie' element={<Anmiee></Anmiee>}></Route>
      </Routes>

      <Routes>
        <Route path='/Action' element={<Info_Actio></Info_Actio>}></Route>
      </Routes>

      <Routes>
        <Route path='/kids' element={<N_kids></N_kids>}></Route>
      </Routes>

    </>
  );
}

export default App;
