import { Fragment } from 'react'
import CardGroup from './CardGroup'
import CardDeck from './CardDeck'
import CardColumns from './CardColumns'
const CardLayout = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Layout do Cartão</h5>
      <h6 className='my-3 text-muted'>Grupo do Cartão</h6>
      <CardGroup />
      <h6 className='my-3 text-muted'>Deck do Cartão</h6>
      <CardDeck />
      <h6 className='my-3 text-muted'>Colunas do Cartão</h6>
      <CardColumns />
    </Fragment>
  )
}

export default CardLayout
