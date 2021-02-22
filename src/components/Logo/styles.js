import styled from "styled-components";

export const Image = styled.img`
    width: ${props => props.size==='small' ? '100px' : '400px'}
`