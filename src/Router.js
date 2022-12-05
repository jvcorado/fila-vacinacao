import { Container } from './components'
import { Login } from './pages/Login';
import { Home } from "./pages/Home";
import { createBrowserRouter } from 'react-router-dom';
import { CadastrarPaciente } from './pages/CadastrarPaciente';
import { ExcluirPaciente } from './pages/ExcluirPaciente';
import { VisualizarPaciente } from './pages/VizualizarPaciente';
import { VacinarPaciente } from './pages/VacinarPaciente';
import { Private } from "./routes/private";



export const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/home',
    element:<Private><Home/></Private>  
  },
  {
    path:'/cadastrarPaciente',
    element: <Private><CadastrarPaciente/></Private>  
  },
  {
    path:'/excluirPaciente',
    element:<Private><ExcluirPaciente/></Private>  
  },
  {
    path:'/visualizarPaciente',
    element:<Private><VisualizarPaciente/></Private>  
  },
  {
    path:'/vacinarPaciente',
    element:<Private><VacinarPaciente/></Private>  
  }
])
  


