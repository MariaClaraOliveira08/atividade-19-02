import { Link } from "react-router-dom"; //link redireciona para a outra página
function CriarEvento(){
    return(
        <div>
            <h1>Criar evento</h1>
            <Link to="/evento"> Ir para evento </Link>
        </div>
    );
}
export default CriarEvento;