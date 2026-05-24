import './Style/Action.css';
import Defu from '../Poster/defu.png';
import { Link, Route, Routes } from 'react-router-dom';
export default function Action({ name, tit, post, lic }) {
    return (<>
        <title>Action Movies</title>
        <div className='bode'>
            <div className='Card'>
                <img src={post == "" ? Defu : post} ></img>
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


