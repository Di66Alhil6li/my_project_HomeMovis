import '../components/Hedr.css'
import Logo from '../pages/img/my_lo.png';
import { Link, useNavigate } from 'react-router-dom';
export default function Headr() {
    let lin = useNavigate();
    return (
        <>
            <div className="hedr">
                <img src={Logo}></img>
                <div className='pag'>
                    <button onClick={() => lin('/Kids')}>أطفال</button>
                    <button onClick={() => lin('/Anmie')}>أنمــي</button>
                    <button onClick={() => lin('/Action')}>أكشــن</button>
                    <button onClick={() => lin('/Home')}>الرئيسية</button>
                </div>
            </div>
        </>
    );
}