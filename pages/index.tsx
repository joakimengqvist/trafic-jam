import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traffic Jam</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Traffic Jam <span style={{fontSize: '100px'}}>@</span>pp
        </h1>
          <ul className="mt-3">
        <li>
          <Link href="/queueConcept">
            <h5>Concept of a request queue.</h5>
          </Link>
        </li>
        <li>
          <Link href="/queueConceptStop">
            <h5>Concept of a request queue.</h5>
          </Link>
        </li>
        <li>
          <Link href="/stopApollo/4000">
            <h5>A more dynamic approach.</h5>
          </Link>
        </li>
        </ul>
      </main>
    </div>
  )
}
