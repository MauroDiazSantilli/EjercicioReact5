import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import React, { useState, useEffect } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [conjuntoTareas, setConjuntoTareas] = useState([]);

    useEffect(() => {
        const tareasStorage = localStorage.getItem('tareas')
        if (tareasStorage){
            setConjuntoTareas(JSON.parse(tareasStorage))
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (tarea.trim() !== "") {
            const nuevasTareas = [...conjuntoTareas, tarea];
            setConjuntoTareas(nuevasTareas);
            setTarea("");
            localStorage.setItem("tareas", JSON.stringify(nuevasTareas))
    }
    }

    const borrarTarea = (tarea) => {
        const nuevoConjuntoTareas = conjuntoTareas.filter((item) => item !== tarea);
        setConjuntoTareas(nuevoConjuntoTareas);
      };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" 
                    onChange={(e) => setTarea(e.target.value)}
                    value={tarea}
                    />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas conjuntoTareas = {conjuntoTareas} borrarTarea={borrarTarea}/>
        </div>
    );
};


export default Formulario;