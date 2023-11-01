import { FC } from 'react'
import clsx from 'clsx'
import { Card } from '../../types/model'
import styles from './styles.module.scss'

interface PropsCardItem {
  card: Card
  open: (card: Card) => void
}

export const CardItem: FC<PropsCardItem> = ({ card, open }) => (
  <article onClick={() => open(card)} className={styles.card}>
    <h3 className={styles.cardName}>{card.name}</h3>
    <p className={clsx(styles.cardPhone, styles.cardText)}>{card.phone}</p>
    <p className={clsx(styles.cardEmail, styles.cardText)}>{card.email}</p>
  </article>
)
