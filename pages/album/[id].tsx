import type { GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
    List,
    Input,
    Title,
    Loader,
    ListAlbumItem
} from '../../components';
import useDebounce from '../../hooks/useDebounce';
import { useFetchPhotoAlbum } from '../../hooks/useFetchPhotoAlbum';

const StyledCenterWrapper = styled.div`
    text-align: center;
    margin: 0 auto 15px;
`

const StyledBackButton = styled.a`
    display: inline-block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
`

const Album: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    const [term, setTerm] = useState("");
    const debouncedSearch = useDebounce(term, 500);

    const { isLoading, isError, isSuccess, data } = useFetchPhotoAlbum( 
        id, 
        debouncedSearch
    );


    const renderResult = () => {
        if (isLoading) {
            return (
                <StyledCenterWrapper>
                    <Loader data-testid="loader" />
                </StyledCenterWrapper>
            )
        }

        if (isError) {
            return <div>Something went wrong, Please try again.</div>
        }

        if (isSuccess) {
            return (
                <List>
                    {data.map((d: any) => (
                        <ListAlbumItem key={d.id} data={d} term={term}></ListAlbumItem>
                    ))}
                </List>
            );
        }

        return <></>;
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    }

    return (
        <>
            <Title>Photo Album</Title>
            <StyledCenterWrapper>
                <Link href={'/'} passHref>
                    <StyledBackButton>Back</StyledBackButton>
                </Link>
            </StyledCenterWrapper>
            <StyledCenterWrapper>
                <Input
                    type="text"
                    onChange={handleOnChange}
                    value={term}
                />
            </StyledCenterWrapper>
            {renderResult()}
        </>
    );
}

export default Album
