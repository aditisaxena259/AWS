import Head from 'next/head'
import QuestionFlow from '../components/QuestionFlow'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Beauty Recommender</title>
        <meta name="description" content="Light & breezy beauty recommender" />
      </Head>
      <main className="container">
        <header className="hero">
          <div>
            <h1>Find your next beauty fave</h1>
            <p className="lead">Choose a category and answer a quick question — we'll recommend a few picks.</p>
          </div>
        </header>

        <section className="card panel">
          <QuestionFlow />
        </section>

        <footer className="foot">
          <small>Demo — no real product data</small>
        </footer>
      </main>
    </div>
  )
}
