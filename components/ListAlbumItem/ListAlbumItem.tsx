
import React from 'react';
import styled from 'styled-components';

export const StyledListAlbumItem = styled.div`
    text-align: center;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 1rem;

    @media (min-width: 768px) {
        width: 30%;
        margin: 0 1.5% 1rem;
    }
`

const makeItalic = (item: string, keyword: string) => {
    const re = new RegExp(keyword, "g");
    return item.replace(re, "<em>" + keyword + "</em>");
};

const ListAlbumItem = ({ data, term }: any) => {
    return (
        <StyledListAlbumItem>
            <div>
                <img
                    src={data.thumbnailUrl}
                    alt={data.title}
                    loading="lazy"
                />
                <div dangerouslySetInnerHTML={{ __html: makeItalic(data.title, term) }}></div>
            </div>
        </StyledListAlbumItem>
    );
}

export default ListAlbumItem;