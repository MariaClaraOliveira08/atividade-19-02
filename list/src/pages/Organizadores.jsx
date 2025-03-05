import { useState, useEffect } from 'react';

// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from '../axios/axios'; // Certifique-se de que o caminho está correto

function Organizadores() {
   const [organizadores, setOrganizadores] = useState([]); // estado

   async function getOrganizadores() {
      // Chamada à API
      await api.getOrganizadores().then(
         (response) => {
            console.log(response.data.organizadores);
            setOrganizadores(response.data.organizadores);
         },
         (error) => {
            console.log("Erro ", error);
         }
      );
   }

   const listOrganizador = organizadores.map((organizador) => {
      return (
         <TableRow key={organizador.id_organizador}> {/* Corrigido para usar 'organizador' */}
            <TableCell align="center">{organizador.nome}</TableCell>
            <TableCell align="center">{organizador.email}</TableCell>
            <TableCell align="center">{organizador.senha}</TableCell>
            <TableCell align="center">{organizador.telefone}</TableCell>
         </TableRow>
      );
   });

   useEffect(() => {
      // Aqui devemos criar ou chamar uma função
      getOrganizadores();
   }, []);

   return (
      <div>
         <h5>Lista dos Organizadores</h5>
         <TableContainer component={Paper} style={{ margin: "2px" }}>
            <Table size="small">
               <TableHead style={{ backgroundColor: "purple", borderStyle: "solid" }}>
                  <TableRow>
                     <TableCell align="center">Nome</TableCell>
                     <TableCell align="center">Email</TableCell>
                     <TableCell align="center">Senha</TableCell>
                     <TableCell align="center">Telefone</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>{listOrganizador}</TableBody>
            </Table>
         </TableContainer>
      </div>
   );
}

export default Organizadores;