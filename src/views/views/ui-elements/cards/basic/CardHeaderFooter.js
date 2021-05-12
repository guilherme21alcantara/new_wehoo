import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button } from 'reactstrap'

const CardHeaderFooter = () => {
  return (
    <Fragment>
      <h6 className='text-muted my-2'>Cabeçalho e rodapé</h6>
      <Row>
        <Col md='6' lg='4'>
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>Tratamento especial de título</CardTitle>
              <CardText>
                Com o texto de apoio abaixo como uma introdução natural ao conteúdo adicional, introdução natural ao conteúdo adicional
                contente.
              </CardText>
              <Button.Ripple color='primary' outline>
                Vá a algum lugar
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card>
            <CardHeader>Frase</CardHeader>
            <CardBody>
              <blockquote className='blockquote mb-0'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor
                  sit amet, Integer posuere erat a ante Integer posuere erat a anteconsectetur.
                </p>
                <footer className='blockquote-footer'>
                  Alguém famoso em
                  <cite title='Source Title'>Título da Fonte</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card className='text-center'>
            <CardHeader>Apresentou</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>Tratamento especial de título</CardTitle>
              <CardText>Com texto de apoio abaixo como um natural.</CardText>
              <Button.Ripple color='primary' outline>
                Vá a algum lugar
              </Button.Ripple>
            </CardBody>
            <CardFooter className='text-muted'>2 dias atrás</CardFooter>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardHeaderFooter
