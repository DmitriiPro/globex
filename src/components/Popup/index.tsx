import { FC } from 'react'
import { ReactComponent as Close } from '../../icons/close.svg'
import { Card } from '../../types/model'
import styles from './styles.module.scss'

interface PropsPopup {
  setPopup: (popup: boolean) => void
  popupCard: Card | null
}

export const Popup: FC<PropsPopup> = ({ popupCard, setPopup }) => {
  return (
    <>
      <section className={styles.popupSection}>
        <Close className={styles.popupClose} onClick={() => setPopup(false)} />

        <h3 className={styles.popupTitle}>{popupCard?.name}</h3>

        <div className={styles.popupWrapper}>
          <p className={styles.popupText}>
            <span>Телефон:</span>
            <span>Адрес:</span>
            <span>Почта:</span>
            <span>Дата приема:</span>
            <span>Подразделение:</span>
          </p>

          <p className={styles.popupTextinfo}>
            <span className={styles.popupSpan}>{popupCard?.phone}</span>
            <span className={styles.popupSpan}>{popupCard?.address}</span>
            <span className={styles.popupSpan}>{popupCard?.email}</span>
            <span className={styles.popupSpan}>{popupCard?.hire_date}</span>
            <span className={styles.popupSpan}>{popupCard?.department}</span>
          </p>
        </div>

        <div className={styles.popupBlock}>
          <p className={styles.popupInfo}>Дополнительная информация:</p>

          <p className={styles.popupSpan}>{popupCard?.position_name}</p>
        </div>
      </section>
      <div className={styles.popupOverlay} onClick={() => setPopup(false)} />
    </>
  )
}
