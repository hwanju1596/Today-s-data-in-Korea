import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
  ];


const Layout = (props: {children: React.ReactNode}) => {
    return (
      <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
           <Header title="오늘의 농작물" sections={sections} />
            <main>
                {props.children}
            </main>
            <Footer/>
        </Container>
      </React.Fragment>
    );
}

export default Layout;