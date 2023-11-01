import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay || 500)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}
