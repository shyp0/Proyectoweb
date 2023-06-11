import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';

function Acceso() {
    return (
        <div class="container-acceder">
            <div class="formulario">
                <Form name="acceso" id="acceso">
                    <h5>Iniciar sesión</h5>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls1" type="email" placeholder="Correo electrónico" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control class="controls1" type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Button className="registrar">Ingresar</Button>{' '}
                    <p class="contraseña">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </p>
                </Form>
            </div>
        </div>
    );
}

export default Acceso;