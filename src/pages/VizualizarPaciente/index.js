import { Container } from './visualizar'
import { Acessar} from '../Login/login'
import { Excluir, Listar, Main, Cont } from '../../components'
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


export const VisualizarPaciente = ()=>{

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

    return(
        <Main>
            <Cabecalho></Cabecalho>
            <Cont>
                <h1>Visualizar Pacientes</h1>

                {pacientes.length === 0 && <span>Nenhum paciente cadastrado na fila </span>}

                {pacientes.map((item, index) =>(
                    <Listar key={index}>
                        <p>Nome: {item.nome}</p>
                        <p>Telefone: {item.telefone}</p>
                        <p>Endereço: {item.endereco}</p>
                        <p>Idade:{item.idade} anos</p>
                    </Listar>
                ))}

                
            </Cont>
        </Main>
    )
}