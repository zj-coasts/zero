
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args)
  .then(res => res.json())

const options = {

}

export const useUser = () => {
  const { data, error } = useSWR(`https://www.fastmock.site/mock/23058e56360d378cb556b71a016e8a5f/api/api`, fetcher, options)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
