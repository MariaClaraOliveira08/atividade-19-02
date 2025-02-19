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
import api from './axios/axios'

function App() {
   const [users,setUsers] = useState([]); //estado

   async function getUsers(){
    //Chamada api
    await api.getUsers().then(
      (response)=>{
        console.log(response.data.users)
        setUsers(response.data.users)
      },(error)=>{
        console.log("Erro ", error)
      }
    ) 
  }

  const listUsers = users.map((user)=>{
    return(
      <TableRow key={user.id_usuario}>
        <TableCell align="center">{user.name}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">{user.cpf}</TableCell>
      </TableRow>
    )
  })

   useEffect(()=>{
    //Aqui devemos criar ou chamar uma função
    getUsers();
   },[]);

  return (
    <div>
      <h5>Lista de Usuários</h5>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size="small">
          <TableHead style={{backgroundColor: "purple", borderStyle:"solid"}}>
            <TableRow>
              <TableCell align="center">
              Nome
              </TableCell>
              <TableCell align="center">
              Email
              </TableCell>
              <TableCell align="center">
              CPF
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listUsers}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
