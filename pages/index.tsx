import { Session } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

interface Props {
  session: Session
}

const Home = ({ session }: Props) => {
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

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
