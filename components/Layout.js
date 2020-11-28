import Head from 'next/head'
import Header from './Header'
import Footer from "./Footer";

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="./static/favicon.ico" />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout ms-container">
                <Header />
                <div className="content">{children}</div>
            </section>
            <Footer />
        </>
    )
}
