import Avatar from '@components/avatar'
import { Card, CardBody, CardText, Button, Badge, Media } from 'reactstrap'
import profileImg from '@src/assets/images/portrait/small/avatar-s-7.jpg'

const CardJob = () => {
  return (
    <Card className='card-apply-job'>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <Media>
            <Avatar className='mr-1' img={profileImg} imgHeight='42' imgWidth='42' />
            <Media body>
              <h6 className='mb-0'>Mittie Evans</h6>
              <small className='text-muted'>Atualizado 12m atrás</small>
            </Media>
          </Media>
          <Badge color='light-primary' pill>
            Design
          </Badge>
        </div>
        <h5 className='apply-job-title'>Preciso de um designer para formar os fundamentos da marca para meu negócio.</h5>
        <CardText className='mb-2'>
          Faça designs de alta qualidade, desenhos, maquetes e layouts para, ambos novos e já existentes, sites /
          aplicativos we / aplicativos mobile.
        </CardText>
        <div className='apply-job-package bg-light-primary rounded'>
          <div>
            <sup className='text-body'>
              <small>$</small>
            </sup>
            <h2 className='d-inline mr-25'>9,800</h2>
            <sub className='text-body'>
              <small>/ mês</small>
            </sub>
          </div>
          <Badge color='light-primary' pill>
            Tempo Integral
          </Badge>
        </div>
        <Button color='primary' block>
          Candidatar-se para esse trabalho
        </Button>
      </CardBody>
    </Card>
  )
}

export default CardJob
