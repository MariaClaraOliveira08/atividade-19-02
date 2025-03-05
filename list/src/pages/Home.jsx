import { Link } from "react-router-dom"; //link redireciona para a outra página 

function Home(){
    return(
        <div>
            <h1>Bem-vindo ao sistema de eventos</h1>
            <Link to="/evento"> Ir para a lista de eventos </Link>
            <Link to="/organizadores"> Ir para a lista de organizadores </Link>
            <Link to="/ingresso"> Ir para a lista de ingressos </Link>
        </div>
    );
}
export default Home;