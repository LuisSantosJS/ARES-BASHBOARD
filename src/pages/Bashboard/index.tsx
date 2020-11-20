import React from 'react';
import './styles.css';
import NavBar from '../../components/NavBar';
import ListContainer from './ListContainer';
import ViewRigth from './ViewRigth';
import { useWindowDimensions } from '../../hooks/useDimension'
const Bashboard: React.FC = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <NavBar coordenador='Renato Almeida' data='20/09/2020' horario='09:10:45' unidade='Ipiranga' />
            <div className='viewbashboardcontainerhehe'>
                <ListContainer width={width <= 700 ? width : width / 2} />
                <ViewRigth width={width <= 700 ? width : width / 2} />
            </div>
        </>
    )
}
export default Bashboard;