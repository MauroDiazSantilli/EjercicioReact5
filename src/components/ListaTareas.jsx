import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({conjuntoTareas, borrarTarea}) => {
    return (
        <div>
            <ListGroup>
                {conjuntoTareas.map((tarea, indice) => (<ItemTarea key = {indice} tarea = {tarea} borrarTarea = {borrarTarea }/>))}
                
            </ListGroup>
        </div>
    );
};

export default ListaTareas;