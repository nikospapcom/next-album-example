import { useQuery } from "react-query";

import { getAlbumsData } from '../utils/api'

export const useFetchAlbums = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "albums",
    getAlbumsData
  );

  return { isLoading, isError, isSuccess, data }
}