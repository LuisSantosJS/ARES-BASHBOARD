import React from 'react';
import './styles.css';
import { useIsOn } from '../../../context/main'
interface Props {
    width: number;
}
const ViewRigth: React.FC<Props> = (props) => {
    const { isOn, setIsOn } = useIsOn();
    return (
        <>
            <div style={{ width: props.width }} className='containerListviewReq'>
                {isOn ?
                    <div onClick={() => setIsOn(!isOn)} style={{ width: props.width }} className='bodycontainer'>
                        <h1 className='textHolder'>"POR FAVOR AGUARDAM A CHAMADA"</h1>
                        <h1 className='textHolder'>FIQUEM ATENTOS</h1>
                    </div>
                    :
                    <div onClick={() => setIsOn(!isOn)} style={{ width: props.width }} className='bodycontainer'>
                        <h2 style={{ color: '#00adf0', fontWeight: 'bold' }}>1 CHAMADA</h2>
                        <div style={{ width: '60%' }} className='gradeline'></div>
                        <h1 style={{ fontWeight: 'bold', color: '#707070' }}>ANDRÉ MACHADO</h1>
                        <h3 style={{ color: '#707070' }}>11 99999-9999</h3>
                        <h4 style={{ color: '#707070' }}>Macedo's Teams</h4>
                        <span style={{ background: '#00be00', width: '10%' }} className='spannbuttonitematendimento'>ESPONTÂNEO</span>
                        <br />
                        <div style={{ width: '60%' }} className='gradeline'></div>
                        <h4 style={{color: '#00adf0'}}>Por Favor dirija-se á recepção</h4>
                    </div>
                }
                <div className='rodape'>
                    <div className='divrowhr'>
                        <div className='gradeline' />Em atendimeto<div className='gradeline' />
                    </div>
                    <div className='collatendimetoucliente'>
                        <div className='itematendimento'>
                            <span className='nameitemtext2'>Luis Santos</span>
                            <span className='nameitemtextsub2'>Luis Santos team</span>
                            <span style={{ background: '#00be00' }} className='spannbuttonitematendimento'>ESPONTÂNEO</span>
                        </div>
                        <div className='itematendimento'>
                            <span className='nameitemtext2'>Luis Santos</span>
                            <span className='nameitemtextsub2'>Luis Santos team</span>
                            <span style={{ background: '#ffbb03' }} className='spannbuttonitematendimento'>INDICAÇÃO</span>
                        </div>
                        <div className='itematendimento'>
                            <span className='nameitemtext2'>Luis Santos</span>
                            <span className='nameitemtextsub2'>Luis Santos team</span>
                            <span style={{ background: '#f000ff' }} className='spannbuttonitematendimento'>RETORNO</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewRigth;