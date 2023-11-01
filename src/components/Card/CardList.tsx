import { FC } from 'react'

import styles from './styles.module.scss'
import { CardItem } from './CardItem'
import { Card, Cards } from '../../types/model'

interface PropsCardList {
  data: Cards
  open: (card: Card) => void
  isStale: boolean
}

export const CardList: FC<PropsCardList> = ({ data, open, isStale }) => {
  return (
    <>
      {!data.length ? (
        <h1>Не найдено...</h1>
      ) : (
        <div
          className={styles.cardList}
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? 'opacity 0.2s 0.2s linear'
              : 'opacity 0s 0s linear',
          }}
        >
          {data.map((card) => (
            <CardItem open={open} key={card.phone} card={card} />
          ))}
        </div>
      )}
    </>
  )
}
