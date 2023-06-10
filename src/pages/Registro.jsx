import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';

function Registro() {
    return (
        <div class="container-registrar">
            <div class="formulario2">
                <Form name="registro" id="registro">
                    <h5>Crear cuenta</h5>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls" type="text" placeholder="Nombre" id="nombre" name="nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls" type="text" placeholder="Apellido" id="apellido" name="apellido"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls" type="email" placeholder="Correo electrónico" id="correo" name="correo"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls" type="password" placeholder="Contraseña" id="contrasena" name="contrasena"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls" type="password" placeholder="Repetir contraseña" id="recontrasena" name="recontrasena"/>
                    </Form.Group>
                    <Button class="registrar">Registrar</Button>{' '}
                </Form>
            </div>
        </div>
    );
}

export default Registro;