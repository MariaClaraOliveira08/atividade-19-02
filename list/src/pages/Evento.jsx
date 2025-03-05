import { useState, useEffect } from 'react'

// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';

// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';

//TableRow é linha da tabela
import TableRow from '@mui/material/TableRow';

//TableCell é as células da tabela
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from '../axios/axios'

import { Link } from "react-router-dom";

function Evento() {
   const [evento,setEventos] = useState([]); //estado

   async function getEventos(){
    //Chamada api
    await api.getEventos().then(
      (response)=>{
        console.log(response.data.events)
        setEventos(response.data.events)
      },(error)=>{
        console.log("Erro ", error)
      }
    ) 
  }

  const listEvento = evento.map((evento)=>{
    return(
      <TableRow key={evento.id_evento}>
        <TableCell align="center">{evento.nome}</TableCell>
        <TableCell align="center">{evento.descricao}</TableCell>
        <TableCell align="center">{evento.data_hora}</TableCell>
        <TableCell align="center">{evento.local}</TableCell>
      </TableRow>
    )
  })

   useEffect(()=>{
    //Aqui devemos criar ou chamar uma função
    getEventos();
   },[]);

  return (
    <div>
      <h5>Lista de Eventos</h5>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size="small">
          <TableHead style={{backgroundColor: "purple", borderStyle:"solid"}}>
            <TableRow>
              <TableCell align="center">
              Nome
              </TableCell>
              <TableCell align="center">
              Descricao
              </TableCell>
              <TableCell align="center">
              Data_Hora
              </TableCell>
              <TableCell align="center">
              Local
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvento}</TableBody>
        </Table>
      </TableContainer>
      <button component= {<Link to="/evento/novo">Criar Evento</Link>}style={{ marginBottom: '10px' }} >Criar Evento</button>
    </div>
  )
}

export default Evento;
