import styled from "@emotion/styled";

export const StyledParagraphComponent = styled.p<{ type: "bold" | "medium" }>`
  font-family: "Open Sans", sans-serif;
  font-weight: ${(props) => (props.type === "bold" ? 700 : 600)};
  font-size: 11px;
  line-height: 15px;
  margin: 0;
  padding: 0;
`;
