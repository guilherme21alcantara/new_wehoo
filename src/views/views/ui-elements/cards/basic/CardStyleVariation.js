import { Fragment } from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardStyleVariation = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Style variation</h5>
      <Row>
        <Col md='6' xl='4'>
          <Card color='primary' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título do cartão primário
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='secondary' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título do cartão secundário
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='success' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título do cartão de sucesso
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='danger' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título da carta de perigo
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='warning' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título do cartão de advertência
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='info' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Título do cartão de informações
              </CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-primary shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Primary Card Title</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-secondary shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Título do cartão secundário</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-success shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Título do cartão de sucesso</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-danger shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Título da carta de perigo</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-warning shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Título do cartão de advertência</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-info shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Título do cartão de informações</CardTitle>
              <CardText>Algum texto de exemplo rápido para construir sobre o título do cartão e compor.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardStyleVariation
