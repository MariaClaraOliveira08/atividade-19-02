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

function Ingressos() {
   const [ingressos, setIngressos] = useState([]); // estado

   async function getIngressos() {
      // Chamada à API
      await api.getIngressos().then(
         (response) => {
            console.log(response.data.organizadores);
            setIngressos(response.data.organizadores);
         },
         (error) => {
            console.log("Erro ", error);
         }
      );
   }

   const listIngresso = ingressos.map((ingresso) => {
      return (
         <TableRow key={ingresso.id_ingresso}> {/* Corrigido para usar 'organizador' */}
            <TableCell align="center">{ingresso.preco}</TableCell>
            <TableCell align="center">{ingresso.tipo}</TableCell>

         </TableRow>
      );
   });

   useEffect(() => {
      // Aqui devemos criar ou chamar uma função
      getIngressos();
   }, []);

   return (
      <div>
         <h5>Lista dos Ingressos</h5>
         <TableContainer component={Paper} style={{ margin: "2px" }}>
            <Table size="small">
               <TableHead style={{ backgroundColor: "purple", borderStyle: "solid" }}>
                  <TableRow>
                     <TableCell align="center">Preço</TableCell>
                     <TableCell align="center">Tipo</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>{listIngresso}</TableBody>
            </Table>
         </TableContainer>
      </div>
   );
}

export default Ingressos;