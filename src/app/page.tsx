import { NextPage } from 'next'
import { UserInfo } from '@/components/UserInfo'

const Home: NextPage = () => {
  return (
    <main>
      <UserInfo version={'v1'} />
      <UserInfo version={'v2'} />
    </main>
  )
}

export default Home
