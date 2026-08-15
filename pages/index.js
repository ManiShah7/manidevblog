import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Index = ({ posts, title, description, ...props }) => {
    return (
        <Layout pageTitle={title}>
            <div className="ms-banner">
                <h1 className="title home-title">{title}</h1>
                <p className="description">{description}</p>
            </div>
            <main className="ms-latest-posts">
                <h2>Latest Posts:</h2>
                <PostList posts={posts} />
            </main>
        </Layout>
    )
}

export default Index

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)

    const postsDirectory = path.join(process.cwd(), 'posts')
    const posts = fs
        .readdirSync(postsDirectory)
        .filter((filename) => filename.endsWith('.md'))
        .map((filename) => {
            const slug = filename.slice(0, -3)
            const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
            const document = matter(fileContents)
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        })

    return {
        props: {
            posts,
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}
