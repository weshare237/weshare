import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

const Home = () => {
  const { data: session } = useSession()

  console.log(session)

  if (!session) return <Login />

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
