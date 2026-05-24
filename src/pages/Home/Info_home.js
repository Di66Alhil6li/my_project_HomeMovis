// Start img
// End img 
import Headr from '../../components/Headr';
import Footr from '../../components/Footer';
import Home from './Home';


export default function Inf_Home() {
    return (<>
        <Headr></Headr>
        <div className='fle_kid'>
            <Home></Home>
        </div>
        <Footr></Footr>
    </>);
}