import { Fragment } from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  CardLink,
  CardImg,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from 'reactstrap'
import img1 from '@src/assets/images/slider/01.jpg'
import img2 from '@src/assets/images/slider/02.jpg'

const CardContentTypes = () => {
  return (
    <Fragment>
      <h5 className='mt-3'>Tipos de conteúdo</h5>
      <Row>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Corpo</h6>
          <Card className='mb-4'>
            <CardBody>
              <CardText>
                Este é algum texto dentro do corpo de um cartão. Geleia de gotas de limão tiramisu bolo de chocolate algodão doce suflê de aveia
                bolo doce rolo. Dragée de maçapão de ameixa com cobertura de barra de chocolate cheesecake. Donut com cobertura de muffin dinamarquês.
              </CardText>
            </CardBody>
          </Card>
          <h6 className='my-2 text-muted'>Títulos, texto e links</h6>
          <Card className='mb-4'>
            <CardBody>
              <CardTitle tag='h4'>Título do Cartão</CardTitle>
              <CardSubtitle className='text-muted mb-1'>Subtítulo do cartão de suporte</CardSubtitle>
              <CardText>
                Algum texto de exemplo rápido para desenvolver o título do cartão e compor a maior parte do conteúdo do cartão.
              </CardText>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Link do cartão
              </CardLink>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Outro Link
              </CardLink>
            </CardBody>
          </Card>
          <h6 className='my-2 text-muted'>Grupos de lista</h6>
          <Card className='mb-4'>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Imagens</h6>
          <Card>
            <img className='img-fluid' src={img1} alt='Card cap' />
            <CardBody>
              <CardText>
                Algum texto de exemplo rápido para desenvolver o título do cartão e compor a maior parte do conteúdo do cartão.
              </CardText>
              <CardText>
                Bolinho, caramelos, jujubas, pão de gengibre. Sorvete de biscoito de pirulito de torta de maçã queque de doces.
                Geléia de bolo de cenoura, barra de chocolate wafer.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Pia da cozinha</h6>
          <Card>
            <CardImg top src={img2} alt='Card cap' />
            <CardBody>
              <CardTitle tag='h4'>Título do Cartão</CardTitle>
              <CardText>Algum texto de exemplo rápido para desenvolver o título do cartão.</CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Link do cartão
              </CardLink>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Outro Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardContentTypes
