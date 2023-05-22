import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  const eliminarTarea = () => {
    borrarTarea(tarea);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger" onClick={eliminarTarea}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;