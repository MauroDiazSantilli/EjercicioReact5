import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import React, { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
    
    if (tarea.trim() !== ""){
    
        setTareas([...tareas, tarea])
        setTarea("")
    }
    }
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
            <ListaTareas tareas = {tareas}/>
        </div>
    );
};


export default Formulario;