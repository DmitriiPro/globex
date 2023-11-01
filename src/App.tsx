import { useEffect, useState } from 'react'
import { isAxiosError } from 'axios'

import { Header } from './components/Header'
import { CardList } from './components/Card/CardList'
import { Popup } from './components/Popup'
import { useDebounce } from './hooks/useDebounce'
import { Service } from './services/service'
import { Card, Cards } from './types/model'
import { Loader } from './components/Loader'

const App = () => {
  const [data, setData] = useState<Cards>([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [search, setSearch] = useState('')
  const debounced = useDebounce<string>(search.toLowerCase(), 500)
  const isStale = search !== debounced

  const [popup, setPopup] = useState(false)
  const [popupCard, setPopupCard] = useState<Card | null>(null)

  const openPopup = (card: Card) => {
    setPopupCard(card)
    setPopup(true)
  }

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await Service.cardBySearchID(debounced)
        setData(response)
        setError('')
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          setError(error?.message)
        } else if (error instanceof Error) {
          setError(error?.message)
        }
      }

      setLoading(false)
    }

    fetchData()
  }, [debounced])

  return (
    <div className="container">
      <div className="wrapper">
        <Header value={search} setSearch={setSearch} />
        <main className="main">
          {isLoading && <Loader />}
          {!!error && <h1>Error: {error}</h1>}
          <CardList isStale={isStale} open={openPopup} data={data} />
        </main>
      </div>
      {popup && <Popup popupCard={popupCard} setPopup={setPopup} />}
    </div>
  )
}

export default App
