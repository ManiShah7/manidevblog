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
                <meta name="description" content="Sharing code, experiences, and stories of a web developer." />
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="Mani Shah" />
                <meta property="og:description" content="Sharing code, experiences, and stories of a web developer." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-EBKCXCLJDK"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EBKCXCLJDK', { page_path: window.location.pathname });
            `,
                }}>
                </script>
            </Head>
            <section className="layout ms-container">
                <Header />
                <div className="content">{children}</div>
            </section>
            <Footer />
        </>
    )
}
