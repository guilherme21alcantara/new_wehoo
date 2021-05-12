import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/slider/04.jpg'
import img2 from '@src/assets/images/slider/03.jpg'
import img3 from '@src/assets/images/slider/06.jpg'

const CardTitles = () => {
  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>Título do Cartão</CardTitle>
            <CardText>
            Algum texto de exemplo rápido para desenvolver o título do cartão e compor a maior parte do conteúdo do cartão.
            </CardText>
            <Button.Ripple color='primary' outline>
            Vá a algum lugar
            </Button.Ripple>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Título do Cartão</CardTitle>
            <CardSubtitle className='text-muted'>Subtítulo do cartão de suporte</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img2} alt='Card cap' />
          <CardBody>
            <CardText>Garra de urso gergelim estala chicletes de chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Link do cartão
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Outro Link
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Título do Cartão</CardTitle>
            <CardSubtitle className='text-muted'>Subtítulo do cartão de suporte</CardSubtitle>
            <img className='img-fluid my-2' src={img3} alt='Card cap' />
            <CardText>Garra de urso gergelim estala chicletes de chocolate.</CardText>
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
  )
}

export default CardTitles
