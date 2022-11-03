import Link from "next/link";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container className="p-5">
        <Card>
          <Form>
            <h1 className="text-center">Entrar na sua loja</h1>
            <Form.Group className="p-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o seu e-mail"
                required
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira a sua senha"
                minLength={8}
                required
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Row>
                <Col>
                  <Link href="/nova-conta">
                    <a>Crie uma conta</a>
                  </Link>
                </Col>
                <Col>
                  <Button type="submit">Entrar</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}
