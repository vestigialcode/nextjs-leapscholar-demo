import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LeapScholar demo page</title>
        <meta name="description" content="Demopage of LeapScholar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://leapfinance.com">LeapScholar</a>
        </h1>
    <h2> Get free Scholarship to USA</h2>
        <p className={styles.description}> 
          Get started by your name and phone no.
        </p>

        <div className={styles.grid}>
         <input typeof="text" placeholder="Name"></input>
        
        </div>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
