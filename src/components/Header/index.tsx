import { ChangeEvent, FC } from 'react'
import clsx from 'clsx'
import { ReactComponent as Search } from '../../icons/search.svg'
import { GrFormClose } from 'react-icons/gr'
import styles from './styles.module.scss'

interface PropsHeader {
  value: string
  setSearch: (search: string) => void
}

export const Header: FC<PropsHeader> = ({ value, setSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input
          value={value.trim()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value.trim())
          }
          type="text"
          className={styles.searchInput}
        />
        {Boolean(value) ? (
          <GrFormClose
            onClick={() => setSearch('')}
            className={clsx(styles.searchIcon, styles.searchClose)}
          />
        ) : (
          <Search className={styles.searchIcon} />
        )}
      </div>
    </header>
  )
}
