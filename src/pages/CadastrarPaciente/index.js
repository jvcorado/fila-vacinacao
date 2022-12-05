import { Container } from './cadastrarPaciente'
import { Main, Acessar } from '../../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebaseConnection';
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';
import { Cabecalho } from '../../components/Header';

export const CadastrarPaciente = ()=>{

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("(11) 9 4444-5555");
    const [endereco, setEndereco] = useState("Logradouro 001");
    const [cpf, setCpf] = useState("5555-555507");
    const [email, setEmail] = useState("paciente22@gmail.com");
    const [idade, setIdade] = useState();
    const [vacinado, setVacinado] = useState('não');

    const [pacientes, setPacientes] = useState([])

    useEffect(()=>{

        const pacientesRef = collection(db, 'pacientes')
        const queryRef = query(pacientesRef, orderBy("idade", "desc"))

        const unsub = onSnapshot(queryRef, (snapshot)=>{
            let lista = [];

            snapshot.forEach((doc)=>{
                lista.push(
                    {
                        id:doc.id,
                        nome:doc.data().nome,
                        telefone:doc.data().telefone,
                        endereco:doc.data().endereco,
                        cpf:doc.data().cpf,
                        email:doc.data().email,
                        idade:doc.data().idade,
                        vaciando:doc.data().vacinado,
                
                    }
                )
            })

            setPacientes(lista);
        })


    },[])


    async function handleCadastrar(e){
        e.preventDefault();

        if(nome === "" || telefone === "" || endereco === "" || cpf === "" || email === "" || idade === ""){
            toast.warn("Preencha todos os campos!")
            return;
        }

        addDoc(collection(db,"pacientes"), {
            nome:nome,
            telefone:telefone,
            endereco:endereco,
            cpf:cpf,
            email:email,
            idade:parseInt(idade),
            vacinado:vacinado,
            created: new Date()
        })
        .then(()=>{
            setNome("")
            setIdade("")
            toast.success("Paciente cadastrado com sucesso")
            console.log('Paciente cadastrado com sucesso')
        })
        .catch((error)=>{
            console.log('ERRO AO CADASTRAR PACIENTE ' + error)
            toast.error("Ops erro ao cadastrar paciente")
        })// criando id aleatorio, definindo a colecao com o bd e o nome dela
    }


    return(
        <Main>
            <Cabecalho></Cabecalho>
            <Container onSubmit={handleCadastrar}>
                <h1>Cadastrar Paciente</h1>

                <input 
                type="text"
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                placeholder='Nome Completo' />

                <input 
                type="tel"
                value={telefone} 
                onChange={(e)=>setTelefone(e.target.value)}
                placeholder='Telefone:' />

                <input 
                type="text"
                value={endereco}
                onChange={(e)=>setEndereco(e.target.value)}
                placeholder='Endereço:' />

                <input 
                type="text"
                value={cpf}
                onChange={(e)=>setCpf(e.target.value)}
                placeholder='CPF:' />

                <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Email:' />

                <input 
                type="number" 
                value={idade}
                min='1'
                onChange={(e)=>setIdade(e.target.value)}
                placeholder='Idade:' />
            
                <Acessar type='submit'>Cadastrar</Acessar>
                    
            </Container>
        </Main>
    )
}