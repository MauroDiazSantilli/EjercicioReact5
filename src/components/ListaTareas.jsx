import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
    return (
        <div>
            <ListGroup>
                {tareas.map((tarea, index) => (<ItemTarea key = {index} tarea = {tarea} />))}
                
            </ListGroup>
        </div>
    );
};

export default ListaTareas;