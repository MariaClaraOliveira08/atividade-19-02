import { Link } from "react-router-dom"; //link redireciona para a outra página 

function Cadastro(){
    return(
        <div>
            <h1>CADASTRO</h1>
            <Link to="/users"> Ir para a lista de usuários </Link>
        </div>
    );
}
export default Cadastro;