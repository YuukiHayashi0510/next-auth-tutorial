import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { CustomNextPage } from '~/types/custom-next-page'

const Home: CustomNextPage = () => {
  const { data, status } = useSession()
  return (
    <main>
      {data?.user?.name || <Link href='/auth/signin'>SignIn</Link>}
      {status === 'authenticated' && (
        <button className='ml-5' onClick={() => signOut()}>
          SignOut
        </button>
      )}
      <Link className='ml-5' href='/secret'>
        SecretPage
      </Link>
    </main>
  )
}

export default Home
