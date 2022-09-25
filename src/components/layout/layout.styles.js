import styled from "@emotion/styled";
import { css } from "@emotion/react";

const container = css`
    max-width: 1440px;
    margin: 0px auto;
    padding: 0px 15px;
`;

export const Wrapper = styled("div")`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const Header = styled("header")`
    ${container};
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const Main = styled("main")`
    ${container};
    flex: 1 1 auto;
    display: flex;
`;

export const Footer = styled("footer")`
    ${container};
    display: flex;
    align-items: center;
`;
