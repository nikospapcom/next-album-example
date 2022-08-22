import type { NextPage } from 'next'
import styled from 'styled-components';
import { List, Title, ListItem, Loader } from '../components';
import { IListItemData } from '../interfaces/IListItemData';
import { useFetchAlbums } from '../hooks/useFetchAlbums';

const StyledCenterWrapper = styled.div`
    text-align: center;
    margin: 0 auto 15px;
`

const Home: NextPage = () => {
  const { isLoading, isError, data } = useFetchAlbums();

  if (isLoading) {
    return (
      <>
        <Title>Albums</Title>
        <StyledCenterWrapper>
          <Loader data-testid="loader" />
        </StyledCenterWrapper>
      </>
    );
  } else if (isError) {
    return (
      <>
        <Title>Albums</Title>
        <div className="center">Something went wrong, Please try again.</div>
      </>
    );
  }

  return (
    <>
      <Title>Albums</Title>
      <List>
        {data.map((d: IListItemData) => (
          <ListItem key={d.id} data={d}></ListItem>
        ))}
      </List>
    </>
  );
}

export default Home
