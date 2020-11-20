import React from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/logo.png'


const Login: React.FC = () => {
    const history = useHistory();

    const handleBasboard = () => {
        history.push('bashboard')
    }



    return (
        <>
            <div className='backgroundContainerViewLogin'>
                <img src={Logo} width='90' alt='icone ' />
                <br />
                <br />
                <div className='viewsinputsssLogin'>
                    <div className='input-field'>
                        <input className={'inputs'} type="text" id="emailinput" required />
                        <label className='labels' htmlFor="emailinput"><span className="glyphicon glyphicon-envelope" /><span style={{ padding: 5 }} />  E-MAIL</label>
                    </div>
                    <br />
                    <br />
                    <div className='input-field'>
                        <input className={'inputs'} type="password" id="senhainput" required />
                        <label className='labels' htmlFor="senhainput"><span style={{ fontSize: 14 }} className='fas fa-lock' /><span style={{ padding: 5 }} />  PASSWORD</label>
                    </div>
                </div>
                <div className='divider' />
                <span onClick={handleBasboard} className='submitLoginScreen'>ENTRAR</span>

            </div>

        </>
    )
}
export default Login;