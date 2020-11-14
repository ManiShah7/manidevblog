import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="ms-container">
            <h5>Mani on social media:</h5>
            <Link href="https://github.com/ManiShahDesigns">
                <a href="https://github.com/ManiShahDesigns" target="_blank">
                    <Image
                        src="./public/img/github.png"
                        alt="GitHub Link"
                        width={ 40 }
                        height={ 34 }
                    />
                </a>
            </Link>
        </footer>
    )
}

