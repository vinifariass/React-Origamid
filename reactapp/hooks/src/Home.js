import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
      <title>Dogs | Home</title>
      <meta  name="description" content="Essa é a descriçãod a home"/>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
