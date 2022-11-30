import { useEffect, useState } from 'react'
import { Container, BoxOne, BoxTwo, Acessar, Sair } from './login'
import { Main } from '../../components'
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import imgLogin from '../../img/imgLogin.png'
import login from '../../img/login.png'


export const Login = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const navigate = useNavigate();

 
    function handleLogin(e){
        e.preventDefault();

        if(email === '' || password === ''){
            toast.warn("Preencha os campos")
        }

        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            toast.success('Bem vindo')
            navigate("/home", {replace:true})
        })
        .catch(()=>{
            console.log('Erro ao tentar fazer login')
        })
    
    }


    return(
        <Main>
            <Container onSubmit={handleLogin}>
                <BoxOne>
                       <img src={login} alt="Login" />
                        <input
                            type="email"
                            value={email}
                            autoComplete='on'
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Digite seu email'>
                        </input>
                        <input
                            AiOutlineUser
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Digite sua senha'/>
                        <Acessar type='submit'>Acessar</Acessar>
                        <Sair onClick={()=>{}}>Sair</Sair>
                </BoxOne>
                <BoxTwo>
                    <img src={imgLogin} alt="escudo saúde" />
                </BoxTwo>
            </Container>
        </Main>
    )
}