import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import Layout from '../../components/Layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    return (
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
            <article className="post-article">
                <h1 className="post-title">{frontmatter.title}</h1>
                <p className="post-date">{frontmatter.date}</p>
                {frontmatter.img ?
                    <Image src={frontmatter.img.url} width={frontmatter.img.width} height={frontmatter.img.height} style={{ width: '100%', height: 'auto' }} alt={frontmatter.title} title={frontmatter.title} /> : ''}
                <div>
                    <ReactMarkdown>{markdownBody}</ReactMarkdown>
                </div>
            </article>

            <Link href="/" className="ms-back-to-blog">
                Back to home
            </Link>
        </Layout>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = fs.readFileSync(path.join(process.cwd(), 'posts', `${postname}.md`), 'utf8')
    const config = await import(`../../siteconfig.json`)
    const data = matter(content)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const paths = fs
        .readdirSync(postsDirectory)
        .filter((filename) => filename.endsWith('.md'))
        .map((filename) => `/blog/${filename.slice(0, -3)}`)

    return {
        paths,
        fallback: false,
    }
}
