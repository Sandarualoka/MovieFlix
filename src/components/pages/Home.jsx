import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../../Request'

const Home = () => {
  return (
    <>
        <Main/>

        <Row title="Up Coming" fetchURL={requests.requestUpComing}/>
        <Row title="Latest" fetchURL={requests.requestLatest}/>
        <Row title="Popular" fetchURL={requests.requestPopular}/>
        <Row title="TopRated " fetchURL={requests.requestTopRated }/>

    </>
  )
}

export default Home