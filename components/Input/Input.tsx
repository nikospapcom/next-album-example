import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
}))`
    margin: 0;
    border: 1px solid #ccc;
    padding: 10px;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    border-radius: 4px;

    /* Browsers have different default form fonts */
    font-size: 13px;
`

const Input = (props: any) => {
    return (
        <StyledInput {...props} />
    );
}

export default Input;