import styled from 'styled-components';

export const StyledTitle = styled.h1`
    text-align: center;
    font-weight: 500;
    margin: 20px 0 40px;
    font-size: 20px;
`

interface ITitle {
    children: React.ReactNode;
}

const Title = ({ children }: ITitle) => {
    return (<StyledTitle data-testid="title">{children}</StyledTitle>);
}

export default Title;