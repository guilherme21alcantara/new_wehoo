import { CardDeck, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import img1 from '@src/assets/images/slider/03.jpg'
import img2 from '@src/assets/images/slider/02.jpg'
import img3 from '@src/assets/images/slider/01.jpg'

const CardDeckComponent = () => {
  return (
    <CardDeck>
      <Card>
        <CardImg top src={img1} alt='card1' />
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>
            Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este conteúdo é
            um pouco mais longo.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Última atualização 3 minutos atrás</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg top src={img2} alt='card2' />
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>Este cartão tem o texto de apoio abaixo como uma introdução natural para conteúdo adicional.</CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Última atualização 3 minutos atrás</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg top src={img3} alt='card3' />
        <CardBody>
          <CardTitle tag='h4'>Título do cartão</CardTitle>
          <CardText>
            Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este cartão tem
            conteúdo ainda mais longo do que o primeiro para mostrar a ação de altura igual.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Última atualização 3 minutos atrás</small>
        </CardFooter>
      </Card>
    </CardDeck>
  )
}

export default CardDeckComponent
