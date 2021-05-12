import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import CardAction from '@components/card-actions'
import { ChevronDown, RotateCw, X } from 'react-feather'
import { CardBody, CardText, Row, Col, Table } from 'reactstrap'

const CardActions = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Card Actions' breadCrumbParent='Card' breadCrumbActive='Card Actions' />
      <Row>
        <Col sm='12'>
          <CardAction
            title='Card Actions'
            actions={['collapse', 'reload', 'remove']}
            endReload={endLoading => {
              setTimeout(() => endLoading(), 2000)
            }}
          >
            <CardBody className='pt-0'>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Ação</th>
                    <th>Ícones</th>
                    <th>Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Recolher</td>
                    <td className='text-center'>
                      <ChevronDown className='collapse-icon' size={15} />
                    </td>
                    <td> Recolher conteúdo do card utilizando a ação de Recolher.</td>
                  </tr>
                  <tr>
                    <td>Recarregar Conteúdo</td>
                    <td className='text-center'>
                      <RotateCw size={15} />
                    </td>
                    <td> Recarregar o conteúdo do seu card utilizando a ação de Recarregar Conteúdo.</td>
                  </tr>
                  <tr>
                    <td>Remover Card</td>
                    <td className='text-center'>
                      <X size={15} />
                    </td>
                    <td> Remover card da página utilizando a ação de Remover Card.</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </CardAction>
        </Col>
      </Row>
      <Row>
        <Col md='6' sm='12'>
          <CardAction title='Collapse' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                Você pode criar um conteúdo recolhível utilizando o nosso componente
                <code>CardAction</code> e passando o utilitário
                <code>actions='collapse'</code>.
              </CardText>
              <CardText className='mb-0'>
                Clique em <ChevronDown size={15} /> para ver o recolhimento do card em ação
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='6' sm='12'>
          <CardAction
            title='Reload'
            actions='reload'
            endReload={endLoading => {
              setTimeout(() => endLoading(), 2000)
            }}
          >
            <CardBody className='pt-0'>
              <CardText>
                Para criar um card recarregável passe o utilitário
                <code>actions='reload'</code> e passe o utilitário <code>endReload</code>
                para encerrar o carregamento.
              </CardText>
              <CardText className='mb-0'>
                Clique em <RotateCw size={15} /> para ver o recarregamento do card em ação
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='6' sm='12'>
          <CardAction title='Remove' actions='remove'>
            <CardBody className='pt-0'>
              <CardText>
                Você pode adicionar a ação de recarregar conteúdo no card adicionando a classe
                You can add refresh content action to card by adding class
                <code>.card-reload</code> a tag do seu card, e adicionar um spinner no corpo do card 
                quando ele estiver recarregando.
              </CardText>
              <CardText className='mb-0'>
                Clique em <RotateCw size={15} /> para ver o recarregamento do conteúdo do card em ação
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
      </Row>
    </Fragment>
  )
}
export default CardActions
