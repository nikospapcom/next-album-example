import styled from 'styled-components';
import { IList } from '../../interfaces/IList';

export const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const List = ({ children }: IList) => {
    return (
        <StyledList data-testid="list">
            {children}
        </StyledList>
    );
}

export default List;