import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: '/[username]',
        query: { username: 'ronakr' }
      }}>
        Ronak's Profile
      </Link>
    </div>
  )
}
