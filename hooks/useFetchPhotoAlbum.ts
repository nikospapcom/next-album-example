import { useQuery } from "react-query";

import { getAlbumData } from '../utils/api'

export const useFetchPhotoAlbum = (id: any, term: string) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    [
      'album', 
      { id, term: term }
    ], () => getAlbumData(id, term))


  return { isLoading, isError, isSuccess, data }
}