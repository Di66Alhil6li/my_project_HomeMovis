import './Style/Kids.css';
import { Link } from 'react-router-dom';

export default function Kids({ name, tit, post, lic }) {
    return (<>
        <title>Kids Movies</title>
        <div className='bode'>
            <div className='Card'>
                <img src={post} ></img>
                <h1>{name}</h1>
                <p>{tit}</p>
                <Link to={`${lic}`} target='_blank'>
                    <button className='wit'>مشاهدة</button>
                </Link>

                <Link to={`${post}`} target='_blank' download>
                    <button className='down'>تنزيل</button>
                </Link>
            </div>
        </div>
    </>);
}