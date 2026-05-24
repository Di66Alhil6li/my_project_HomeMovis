import Feac from './icon/fb.png';
import Inst from './icon/ins.png';
import Twtt from './icon/twitter.png';
import Black from './black.png';
import './Fotr.css';
export default function Footer() {
    return (<>
        <div className="Foot_all">
            <hr></hr>
            <img src={Black} />
            <p className='tit'>© HOME MOVIES</p>
            <label>اشتراك في اخر التحديثات</label> <br></br>
            <input id='ema' type='email' placeholder='Email@' />
            <button>اشترك</button>
            <br></br>
            <div className='Folw'>
                <p>تابعنا على مواقع التواصل</p>
                <p className='m__a'></p>
                <div className='ico_n'>
                    <a href='https://www.fb.com/' target='_blank'><img id='feac' src={Feac} /></a>
                    <a href='https://www.instagram.com/' target='_blank'><img id='feac' src={Inst} /></a>
                    <a href='https://www.x.com/' target='_blank'><img id='feac' src={Twtt} /></a>
                </div>
            </div>
            <div className='by'>
                <p> HomeMovies  مشاهدة الافلام والمسلسلات ❤️ صنع في اليمن</p>
            </div>
        </div>
    </>);
}