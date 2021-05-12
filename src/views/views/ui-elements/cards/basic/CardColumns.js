import { CardColumns, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'
import img2 from '@src/assets/images/slider/01.jpg'
import img3 from '@src/assets/images/slider/02.jpg'
const CardColumnsComponent = () => {
  return (
    <CardColumns>
      <Card className='position-static'>
        <CardImg top src={img1} alt='card1' />
        <CardBody>
          <CardTitle tag='h4'>Título do cartão que segue em uma nova linha</CardTitle>
          <CardText>
            Este é um cartão mais longo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este conteúdo é
            um pouco mais longo.
          </CardText>
        </CardBody>
      </Card>
      <Card className='position-static'>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              Alguém famoso em
              <cite title='Source Title'>Título da Fonte</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='position-static'>
        <CardImg top src={img2} alt='card2' />
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>Este cartão tem o texto de apoio abaixo como uma introdução natural para conteúdo adicional.</CardText>
          <CardText>
            <small className='text-muted'>Última atualização 3 minutos atrás</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className='text-center' color='primary' inverse>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-white'>
              Alguém famoso em
              <cite title='Source Title'>Título da Fonte</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='text-center'>
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>Este cartão tem o texto de apoio abaixo como uma introdução natural para conteúdo adicional.</CardText>
          <CardText>
            <small className='text-muted'>Última atualização 3 minutos atrás</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className='position-static'>
        <CardImg src={img3} alt='card-only' />
      </Card>
      <Card className='text-right'>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              Alguém famoso em
              <cite title='Source Title'>Título da Fonte</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='position-static'>
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>
            Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este cartão tem
            conteúdo ainda mais longo do que o primeiro para mostrar a ação de altura igual.
          </CardText>
          <CardText>
            <small className='text-muted'>Última atualização 3 minutos atrás</small>
          </CardText>
        </CardBody>
      </Card>
    </CardColumns>
  )
}

export default CardColumnsComponent
