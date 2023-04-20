import React from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner'
import {data} from '../data/data'

function Home() {

  return (
    <React.Fragment>
        <Header />
        <Banner data={data[0]}/>
        <Banner data={data[1]}/>
        <Banner data={data[2]}/>
    </React.Fragment>
  );
}

export default Home;