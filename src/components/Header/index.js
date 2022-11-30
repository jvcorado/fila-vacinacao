import { Header } from './header'
import { useNavigate } from 'react-router-dom';
import { Cadastrar, Excluir, Visualizar, Home } from '../../components';
import { AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineTeam, AiOutlineHome } from "react-icons/ai";



export const Cabecalho = ()=>{

    const navigate = useNavigate();

    function handleHome(){
        navigate("/home", { replace:true })
    }


    function handleCadastrarPaciente(){
        navigate("/cadastrarPaciente", { replace:true })
    }

    function handleExcluirPaciente(){
        navigate("/excluirPaciente", { replace:true })
    }

    function handleVisualizarPaciente(){
        navigate("/visualizarPaciente", { replace:true })
    }

    return(
        <Header>

            <Home onClick={handleHome}><AiOutlineHome size={24}/>
            </Home>

            <Cadastrar onClick={handleCadastrarPaciente}><AiOutlineUserAdd size={24}/>
            </Cadastrar>

            <Excluir onClick={handleExcluirPaciente}><AiOutlineUserDelete size={24}/></Excluir>

            <Visualizar onClick={handleVisualizarPaciente}><AiOutlineTeam size={24}/></Visualizar>
        </Header>
    )
}