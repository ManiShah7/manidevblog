import Head from 'next/head'
import Header from './Header'
import Footer from "./Footer";

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head>
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-EBKCXCLJDK"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

  gtag('config', 'G-EBKCXCLJDK');
</script> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="./static/favicon.ico" />
                {/*<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>*/}
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
