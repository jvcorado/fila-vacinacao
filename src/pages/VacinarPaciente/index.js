import {  Listar, Main,  View, Update } from '../../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebaseConnection';
import {
    collection,
    query,
    doc,
    orderBy,
    getDocs,
    updateDoc,
    startAt,
    endAt,
} from 'firebase/firestore';

import { Cabecalho } from '../../components/Header'


export const VacinarPaciente = ()=>{

    const lista = [];
    const pacientesRef = collection(db, 'pacientes')

    //filtrado os vacinados === não
    const vacinadosRef= query(pacientesRef, orderBy("vacinado"),startAt('não'),endAt('não'))

    const [vacinado, setVacinado] = useState([])

    //carregando apenas os pacientes não vacinados
    useEffect(()=>{

        function loadPacientesNãoVacinado(){

            getDocs(vacinadosRef).then((snapshot)=>{

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

                setVacinado(lista)
                console.log('buscou')
            })
    }

    loadPacientesNãoVacinado();

    },[vacinado])

    async function handleVacinar(id){

        const docRef = doc(db, 'pacientes', id)
        await updateDoc(docRef,{
            vacinado:'sim'
        }) 
        .then(()=>{ 
            toast.success('Paciente Vacinado com Sucesso')   
            console.log('paciente vacinado')
        })
        .catch(()=>{
            console.log('Erro ao vacinar paciente')
        })

    }






   

    return(
        <Main>
            <Cabecalho></Cabecalho>
            <View>
                <h1>Vacinar Pacientes</h1>

                {vacinado.length === 0 && <span>Nenhum paciente para ser vacinado na fila </span>}

                {vacinado.map((item, index) =>(
                    <Listar key={index}>
                        <p>Nome: {item.nome}</p>
                        <p>Telefone: {item.telefone}</p>
                        <p>Endereço: {item.endereco}</p>
                        <p>CPF: {item.cpf}</p>
                        <p>Email: {item.email}</p>
                        <p>Idade: {item.idade} anos</p>
                        <p>Vacinado: {item.vacinado}</p>
                        <Update onClick={()=>handleVacinar(item.id)}>Vacinar</Update>
                    </Listar>
                ))}
            </View>
        </Main>
    )
}