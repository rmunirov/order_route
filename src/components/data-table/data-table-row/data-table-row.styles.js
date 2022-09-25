import styled from "@emotion/styled";

export const Row = styled("tr")`
    background-color: ${(props) => (props.isActive ? "#eeff41" : "white")};
`;
