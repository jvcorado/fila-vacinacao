import { Container } from './excluirPaciente'
import { Acessar} from '../Login/login'
import { Excluir, Listar, Main,  View } from '../../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebaseConnection';
import {
    getDocs,
    collection,
    query,
    orderBy,
    doc,
    deleteDoc
} from 'firebase/firestore';
import { Cabecalho } from '../../components/Header'



export const ExcluirPaciente = ()=>{

    const [pacientes, setPacientes] = useState([])

    useEffect(()=>{

        function loadPacientes(){
           
            const pacientesRef = collection(db, 'pacientes')
            const queryRef = query(pacientesRef, orderBy('idade', 'desc'))

            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {
                            id:doc.id,
                            nome: doc.data().nome,
                            telefone:doc.data().telefone,
                            endereco:doc.data().endereco,
                            idade:doc.data().idade
                        }
                    )
                })

                setPacientes(lista)
                console.log('buscou')
            })

    }

    loadPacientes();

    },[])

    async function handleDelete(nome){
        await deleteDoc(doc(db, 'pacientes', nome))
        console.error()
    }


    return(
        <Main>
            <Cabecalho></Cabecalho>
            <View>
                <h1>Excluir Paciente</h1>

                {pacientes.length === 0 && <span>Nenhum paciente cadastrado na fila </span>}

                {pacientes.map((item) =>(
                    <Listar key={item.id}>
                        <p>Nome: {item.nome}</p>
                        <p>Telefone: {item.telefone}</p>
                        <p>Endereço: {item.endereco}</p>
                        <p>Idade: {item.idade} anos</p>
                        <button onClick={() => handleDelete(item.nome)}>Deletar</button>
                    </Listar>
                ))}
            </View>
        </Main>
    )
}