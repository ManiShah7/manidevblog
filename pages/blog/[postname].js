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
                    <Image src={frontmatter.img.url} width={frontmatter.img.width} height={frontmatter.img.height} layout={frontmatter.img.layout} alt={frontmatter.title} title={frontmatter.title} /> : ''}
                <div>
                    <ReactMarkdown source={markdownBody} />
                </div>
            </article>

            <Link href="/">
                <a className="ms-back-to-blog">Back to home</a>
            </Link>
        </Layout>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = await import(`../../posts/${postname}.md`)
    const config = await import(`../../siteconfig.json`)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys()
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

            return slug
        })
        return data
    })(require.context('../../posts', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/blog/${slug}`)

    return {
        paths,
        fallback: false,
    }
}
