import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="ms-container">
            <h5>Mani on social media:</h5>
            <div className="footer-links">
                <Link href="https://github.com/ManiShahDesigns" className="footer-links__social">
                    <a href="https://github.com/ManiShahDesigns" target="_blank" rel="noopener">
                        <Image
                            src="/static/img/github.png"
                            alt="GitHub Link"
                            width={40}
                            height={34}
                        />
                    </a>
                </Link>
                <Link href="https://twitter.com/mani_shahali" className="footer-links__social">
                    <a href="https://twitter.com/mani_shahali" target="_blank" rel="noopener">
                        <Image
                            src="/static/img/twitter.png"
                            alt="GitHub Link"
                            width={38}
                            height={38}
                        />
                    </a>
                </Link>
            </div>
        </footer>
    )
}

