import {  Listar, Main,  View, Update } from '../../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebaseConnection';
import {
    getDocs,
    collection,
    query,
    orderBy,
    doc,
    onSnapshot,
    updateDoc
} from 'firebase/firestore';
import { Cabecalho } from '../../components/Header'

export const VisualizarPaciente = ()=>{

    let lista = [];
    const pacientesRef = collection(db, 'pacientes')
    const queryRef = query(pacientesRef, orderBy("idade", "desc"))
    const [pacientes, setPacientes] = useState([])
    const [vacinado, setVacinado] = useState([])

    useEffect(()=>{

        const unsub = onSnapshot(queryRef, (snapshot)=>{
            let lista = [];

            snapshot.forEach((doc)=>{
                lista.push(
                    {
                        id:doc.id,
                        nome: doc.data().nome,
                        telefone:doc.data().telefone,
                        endereco:doc.data().endereco,
                        cpf:doc.data().cpf,
                        email:doc.data().email,
                        idade:doc.data().idade,
                        vacinado:doc.data().vacinado
                    }
                )
            })

            setPacientes(lista);
        })

    },[])

    useEffect(()=>{

        function loadPacientes(){

            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {
                            id:doc.id,
                            nome: doc.data().nome,
                            telefone:doc.data().telefone,
                            endereco:doc.data().endereco,
                            cpf:doc.data().cpf,
                            email:doc.data().email,
                            idade:doc.data().idade,
                            vacinado:doc.data().vacinado,
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
            <View>
                <h1>Visualizar Pacientes</h1>

                {pacientes.length === 0 && <span>Nenhum paciente cadastrado na fila </span>}

                {pacientes.map((item, index) =>(
                    <Listar key={index}>
                        <p>Nome: {item.nome}</p>
                        <p>Telefone: {item.telefone}</p>
                        <p>Endere??o: {item.endereco}</p>
                        <p>CPF: {item.cpf}</p>
                        <p>Email: {item.email}</p>
                        <p>Idade: {item.idade} anos</p>
                        <p>Vacinado: {item.vacinado}</p>
                    </Listar>
                ))}
            </View>
        </Main>
    )
}