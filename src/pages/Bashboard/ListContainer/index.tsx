import React from 'react';
import './styles.css';
import { useIsOn } from '../../../context/main'
import { useWindowDimensions } from '../../../hooks/useDimension'
interface Props {
    width: number;
}

interface List {
    name: string;
    sub: string;
}

const DATA: List[] = [
    {
        name: 'Luis Santos',
        sub: 'Luis Santos Team'
    },
    {
        name: 'André gustavo',
        sub: 'André gustavo Team'
    },
    {
        name: 'Maria José',
        sub: 'Maria José Team'
    },
    {
        name: 'Felipe',
        sub: 'Felipe Team'
    },

]
const ListContainer: React.FC<Props> = (props) => {
    const { isOn } = useIsOn();
    const { height } = useWindowDimensions()

    const isON = (index: number) => {
        if (!isOn) {
            if (index === 0) {
                return 'primeirachamada'
            }
            if (index === 1) {
                return 'segundachamada'
            }
            if (index === 2) {
                return 'terceirachamada'
            }
        }
        return ''
    }


    const isONText = (index: number) => {
        if (!isOn) {
            if (index === 0) {
                return 'PRIMEIRA CHAMADA'
            }
            if (index === 1) {
                return 'SEGUNDA CHAMADA'
            }
            if (index === 2) {
                return 'TERCEIRA CHAMADA'
            }
        }
        return ''
    }

    return (
        <>
            <div style={{ width: props.width, height: height - 80 }} className='containerListview'>
                <br />
                <div className='divsearchandname'>{//SEARCH
                }
                    <span className='titlelistaportadimeto'>Lista de corretores por lista de atendimento</span>
                    <div className='rowsearccsss w3-border'>
                        <input placeholder='Buscar' className='searcINputs' />
                        <span style={{ color: '#707070' }} className='glyphicon glyphicon-search cursor' />
                    </div>
                </div>
                <br />
                <div className='containerlIStss'>
                    <br />
                    {DATA.map((res, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={`itemview ${isON(index)}`}>
                                    <h3>{index + 1}</h3>
                                    <div style={{ padding: 20 }} />
                                    <div className='infoItemNames'>
                                        <span className='nameitemtext'>{res.name}</span>
                                        <span className='nameitemtextsub'>{res.sub}</span>
                                    </div>
                                    <span className={`nomezinhochamada ${isON(index)}text`}>{isONText(index)}</span>
                                </div>
                                <br />
                            </React.Fragment>
                        )

                    })}
                </div>

            </div>
        </>
    )
}
export default ListContainer;