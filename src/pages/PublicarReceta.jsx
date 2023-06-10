import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PublicarReceta() {
    return (
        <div class="container">
            <h1>Publicar receta</h1>
            <h4>
                Puedes publicar la receta que deseas, ¡siempre y cuando sea saludable!
            </h4>
            <br></br><br></br>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre de la receta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre de la receta" id="nombre_receta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción de la receta</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese descripción de la receta" id="descripcion_receta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese los ingredientes de la receta" id="ingredientes_receta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Preparación</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese la elaboración paso a paso de la receta" id="preparacion:receta" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nivel de receta</Form.Label>
                    <Form.Select>
                        <option>Nivel fácil</option>
                        <option>Nivel medio</option>
                        <option>Nivel difícil</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Selecione una(s) foto(s) de la receta</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Button variant="success">Publicar receta</Button>{' '}
            </Form>

        </div>
    );
}

export default PublicarReceta;