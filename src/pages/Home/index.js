import { Container } from './home'
import { Main } from '../../components'
import { useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Header';
import hospital from '../../img/hospital.png'


export const Home = ()=>{

    const navigate = useNavigate();

    function handleCadastrarPaciente(){
        navigate("/cadastrarPaciente", { replace:true })
    }

    function handleExcluirPaciente(){
        navigate("/excluirPaciente", { replace:true })
    }

    return(
        <Main>
            <Cabecalho/>
            <Container>
               <img src={hospital} alt="hospital" />
            </Container>
        </Main>
    )
}