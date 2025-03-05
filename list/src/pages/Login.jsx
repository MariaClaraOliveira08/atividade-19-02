import { Link } from "react-router-dom"; //link redireciona para a outra página

function Login(){
    return(
        <div>
            <h1>LOGIN</h1>
            <Link to="/cadastro"> Ir para Cadastro </Link>
        </div>
    );
}
export default Login;