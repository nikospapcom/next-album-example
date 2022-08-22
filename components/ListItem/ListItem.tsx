import styled from 'styled-components';
import Link from 'next/link'

import { IListItem } from '../../interfaces/IListItem';

export const StyledListItem = styled.a`
    text-align: center;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 4px;
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

const ListItem = ({ data }: IListItem) => {
    return (
        <Link href={`/album/${encodeURIComponent(data.id)}`} passHref>
            <StyledListItem>
                {data.title}
            </StyledListItem>
        </Link>
    );
}

export default ListItem;