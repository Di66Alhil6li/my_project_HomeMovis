import { useState } from 'react';
import '../pages/styal-login/stayle.css';
import LogMo from './img/my_lo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {



    let login = useNavigate();
    let [UseDat, setData] = useState({ nam: "", Passw: "" });
    let Ath = [
        { user: "Diaa", pass: "100" },
        { user: "azooz", pass: "200" },
        { user: "az", pass: "200" }
    ]

    return (
        <>
            <title>login</title>
            <div className="conte">
                <div>
                    <div className='logo'>
                        <img src={LogMo}></img>
                    </div>
                    <div id='mst'></div>

                    <div className='sty-in'>
                        <input id="use" placeholder="Username" required onChange={(use) => {
                            setData({...UseDat,nam:use.target.value});
                            console.log(UseDat)
                        }} />

                        <input id="pas" type='password' placeholder='Password' required onChange={(Pass) => {
                            setData({...UseDat,Passw:Pass.target.value});
                            console.log(UseDat)

                        }} />

                        <br></br>
                    </div>
                    <div className='btun'>
                        <button onClick={() => {
                            Ath.find(item => item.user==UseDat.nam && item.pass == UseDat.Passw ) ? login('/Home') :  alert("اسم المسخدم او كلمة المرور غير صحيح!!");
                            // if ((UseDat.nam === Ath[0].user || UseDat.nam === Ath[1].user) && (UseDat.Passw === Ath[0].pass || UseDat.Passw === Ath[1].pass)) {
                            //     login('/Home');
                            // } else {
                            //     alert("اسم المسخدم او كلمة المرور غير صحيح!!");
                            // }
                        }}

                        >دخــــول</button><br></br>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
}

