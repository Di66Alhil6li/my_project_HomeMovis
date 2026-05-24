import './Tabl.css';
import Act from './img_Tab/Acton.jpg';
import Anmie from './img_Tab/Anme.jpg';
import Kids from './img_Tab/Kids.jpg';
import { Link ,useNavigate} from 'react-router-dom';

export default function Table() {
        let lin = useNavigate();

    return (<>
        <div className='Cont'>
            <table className='TA'>
                <tr>
                    <th><img src={Act} /></th>
                    <th><img src={Anmie} /></th>
                    <th><img src={Kids} /></th>
                </tr>
                <tr>
                    <td rowSpan={"2"}><button onClick={() => lin('/Action')}>أكشن</button></td>
                    <td rowSpan={"2"}><button onClick={() => lin('/Anmie')}>أنمي</button></td>
                    <td rowSpan={"2"}><button onClick={() => lin('/Kids')}>أطفال</button></td>
                </tr>
            </table>
        </div>
    </>);
}