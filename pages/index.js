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

    const posts = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            const value = values[index]
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        })
        return data
    })(require.context('../posts', true, /\.md$/))

    return {
        props: {
            posts,
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}

