
import { Main } from '../../components'
import { Cabecalho } from '../../components/Header';
import { useState, useEffect } from 'react';
import { Container, Card } from './home';
import { db } from '../../firebaseConnection';
import {
    getDocs,
    collection,
    query,
    orderBy,
} from 'firebase/firestore';
import hospital from '../../img/hospital.png'


export const Home = ()=>{

    const pacientesRef = collection(db, 'pacientes')
    const queryRef = query(pacientesRef, orderBy('idade', 'desc'))

    const [mediaIdade, setMediaIdade] = useState(0);
    const [vacinados, setVacinados] = useState(0);
    const [mediaMaiorIdade, setMediaMaiorIdade] = useState(0);
    const [mediaMaiorIdadeVacinado, setMediaMaiorIdadeVacinado] = useState(0);

    
    useEffect(()=>{

        function calcMediaIdade(){

    
            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {   
                           idade:doc.data().idade
                        }
                    )
                }) 
             
                const totalIdade = lista.reduce((prevVal, elem) => prevVal + elem.idade, 0)
                setMediaIdade((totalIdade /lista.length).toFixed(0))
            })  

        }

        calcMediaIdade()

    },[])

    useEffect(()=>{

        function calcMaiorIdade(){

            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {   
                           idade:doc.data().idade,
                        }
                    )
                })
                
                const nvArray = []
                lista.filter((elem)=>{
                    if(elem.idade >= 18){
                        nvArray.push(elem)
                    }
                })
                
                setMediaMaiorIdade((nvArray.length / lista.length).toFixed(1)*100)
            })  

        }
        calcMaiorIdade()
    },[])


    useEffect(()=>{

        function calcVacinados(){

            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {   
                           vacinado:doc.data().vacinado
                        }
                    )
                })
                
                //buscando vacinados
                const nvArray = []
                lista.filter((elem)=>{
                    if(elem.vacinado == 'sim'){
                        nvArray.push(elem)
                    }
                })

    
                parseInt(setVacinados((nvArray.length / lista.length).toFixed(1)*100))
            })  

        }

        calcVacinados()

    },[])

    useEffect(()=>{

        function calcMaiorIdadeVacinado(){

            getDocs(queryRef).then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push(
                        {   
                           idade:doc.data().idade,
                           vacinado:doc.data().vacinado
                        }
                    )
                })
                
                //buscando vacinados
                const nvArray = []
                lista.filter((elem)=>{
                    if(elem.vacinado == 'sim' && elem.idade >= 18){
                        nvArray.push(elem)
                    }
                })

                setMediaMaiorIdadeVacinado((nvArray.length / lista.length).toFixed(1)*100)
            })  

        }
        calcMaiorIdadeVacinado()
    },[])


    return(
        <Main>
            <Cabecalho/>
            <Container>
                <h1>Overview</h1>
                <Card>
                    <h1>Seja bem vindo!</h1>
                    <div>
                        <div>
                            <h2>{mediaIdade} anos</h2>
                            <span>Média de idade</span>
                        </div>
                        <div>
                            <h2>{mediaMaiorIdade}%</h2>
                            <span>Maior de idade</span>
                        </div>
                        <div>
                            <h2>{vacinados}%</h2>
                            <span>Vacinados</span>
                        </div>
                        <div>
                            <h2>{mediaMaiorIdadeVacinado}%</h2>
                            <span>Vacinados maior de 18 anos</span>
                        </div>
                    </div>
                </Card>
                <img src={hospital} alt="hospital"/>
            </Container>
        </Main>
    )
}