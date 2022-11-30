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
    doc,
    deleteDoc
} from 'firebase/firestore';
import { Cabecalho } from '../../components/Header';

export const CadastrarPaciente = ()=>{

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("(11) 9 4444-5555");
    const [endereco, setEndereco] = useState("Logradouro 001");
    const [idade, setIdade] = useState();

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
                        idade:doc.data().idade,
                    }
                )
            })

            setPacientes(lista);
        })


    },[])


    async function handleCadastrar(e){
        e.preventDefault();

        if(nome === "" || telefone === "" || endereco === "" || idade === ""){
            toast.warn("Preencha todos os campos!")
            return;
        }

        addDoc(collection(db,"pacientes"), {
            nome:nome,
            telefone:telefone,
            endereco:endereco,
            idade:idade,
            created: new Date(),
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