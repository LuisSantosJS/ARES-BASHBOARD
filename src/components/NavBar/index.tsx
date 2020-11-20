import React from 'react';
import './styles.css'


interface Props {
    coordenador?: string;
    unidade?: string;
    data?: string;
    horario?: string;
}
const NavBar: React.FC<Props> = (props) => {
    return (
        <>
            <div  className='navbarcomponentview'>
                <div className='colnavcontainerrow'>
                    <span style={{ color: 'white', fontSize: 16 }} className='fas fa-user-alt' />
                    <div className='namesdivdentronavcol'>
                        <span className='cordenadortilete'>Coordenador:</span>
                        <span className='cordenadortiletename'>{props.coordenador}</span>
                    </div>
                </div>
                <div className='colnavcontainerrow'>
                    <span style={{ color: 'white', fontSize: 16 }} className='fas fa-hotel' />
                    <div className='namesdivdentronavcol'>
                        <span className='cordenadortilete'>Unidade:</span>
                        <span className='cordenadortiletename'>{props.unidade}</span>
                    </div>

                </div>
                <div className='colnavcontainerrow'>
                    <span style={{ color: 'white', fontSize: 16 }} className='far fa-clock' />
                    <div className='namesdivdentronavcol'>
                        <span className='cordenadortilete'>{props.data}</span>
                        <span className='cordenadortiletename'>{props.horario}</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar;