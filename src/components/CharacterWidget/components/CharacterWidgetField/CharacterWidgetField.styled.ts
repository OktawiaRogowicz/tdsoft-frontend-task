import styled from "@emotion/styled";

export const CharacterWidgetFieldContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 0;
  margin: 0;
  align-items: center;
`;

export const CharacterWidgetFieldTag = styled.div`
  padding: 2px 4px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 4px;
  text-transform: lowercase;
`;
