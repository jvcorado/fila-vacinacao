import { Excluir, Listar, Main,  View } from '../../components'
import { useEffect, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { db } from '../../firebaseConnection';
import {
    getDocs,
    collection,
    query,
    orderBy,
    doc,
    deleteDoc,
    onSnapshot,
} from 'firebase/firestore';
import { Cabecalho } from '../../components/Header'


export const ExcluirPaciente = ()=>{

    const pacientesRef = collection(db, 'pacientes')
    const queryRef = query(pacientesRef, orderBy("idade", "desc"))
    const [pacientes, setPacientes] = useState([])

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
                console.log('buscou pacientes no bd')
            })

    }

    loadPacientes();

    },[])

    /*useEffect ( ()=>{
        setPacientes(
            Object.values(pacientes).filter((item)=>{
                item.nome.toLowerCase().includes(busca.toLowerCase())
            })
        )

    },[])
    console.log(busca)*/

    async function handleDelete(id){
        const docRef = doc(db, 'pacientes', id)
        await deleteDoc(docRef)
        toast.success('Paciente deletado com sucesso!')    
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
                        <p>CPF: {item.cpf}</p>
                        <p>Email: {item.email}</p>
                        <p>Idade: {item.idade} anos</p>
                        <p>Vacinado: {item.vacinado}</p>
                        <Excluir onClick={() => handleDelete(item.id)}><FiTrash2 size={24} color="white"></FiTrash2></Excluir>
                    </Listar>
                ))}
            </View>
        </Main>
    )
}