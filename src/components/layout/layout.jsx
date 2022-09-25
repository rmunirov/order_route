import React from "react";
import { Footer, Header, Main, Wrapper } from "./layout.styles";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
