import Head from 'next/head'
import { Link } from "react-router-dom";
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
        <li><a href="/queueConcept"><h5>Concept of a request queue.</h5></a></li>
        <li><a href="/queueConceptStop"><h5>Putting some real data in the queue.</h5></a></li>
        <li><a href="/stopApollo/4000"><h5>A more dynamic approach.</h5></a></li>
        </ul>
      </main>
    </div>
  )
}
