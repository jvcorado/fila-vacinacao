import { Header } from './header'
import { useNavigate } from 'react-router-dom';
import { Excluir } from '../../components';
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

    function handleVacinarPaciente(){
        navigate("/vacinarPaciente", { replace:true })
    }

    return(
        <Header>

            <button onClick={handleHome}><AiOutlineHome size={24}/>
            </button>

            <button onClick={handleCadastrarPaciente}><AiOutlineUserAdd size={24}/>
            </button>

            <button onClick={handleExcluirPaciente}><AiOutlineUserDelete size={24}/></button>
            
            <button onClick={handleVisualizarPaciente}><AiOutlineTeam size={24}/></button>

            <button onClick={handleVacinarPaciente}><AiOutlineTeam size={24}/></button>
        </Header>
    )
}