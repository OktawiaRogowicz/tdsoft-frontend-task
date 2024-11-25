import styled from "@emotion/styled";

export const StyledButtonComponent = styled.button`
    background-color: ${(props) => props.theme.colors.offWhite};
    padding: 7px 19px;
    border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
    border-radius: 4px;
    cursor: pointer;
    
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.black};
    
    min-width: 90px;
    transition: 200ms;

    &:hover {
        color: ${(props) => props.theme.colors.gray};
    }

    &:disabled {
        background-color: ${(props) => props.theme.colors.white};
        border: ${(props) => `1px solid ${props.theme.colors.offWhite}`};
        color: ${(props) => props.theme.colors.lightGray};
        pointer-events: none;
    }
    
}
`;
