import React from "react";
import App, { Container } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {`
            body {
              margin: 0;
              box-sizing: border-box;
              font-family: "Josefin Sans", sans-serif;
              --green: #4f9995;
              --red: #994f53;
              --white: #fafbf7;
              background-image: url("http://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1528343994/cloudy-day.png");
            }
          `}
        </style>
      </Container>
    );
  }
}
