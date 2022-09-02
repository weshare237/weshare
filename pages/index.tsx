import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Weshare</title>
        <link
          rel='stylesheet'
          href='https://www.w3schools.com/w3css/4/w3.css'
        />
        <link
          rel='stylesheet'
          href='https://www.w3schools.com/lib/w3-theme-blue-grey.css'
        />
      </Head>

      <Header />

      <main></main>
    </div>
  )
}

export default Home
