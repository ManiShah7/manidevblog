import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-logo">
                    <Link href="/">
                        <a className="nav-logo logo">
                            Mani Shah
                            <Image
                                src="/static/img/header.png"
                                alt="Site Logo"
                                width={24}
                                height={20}
                            />
                        </a>
                    </Link>
                </div>

                <div className="nav-menu">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

