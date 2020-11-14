import Link from 'next/link'

export default function PostList({ posts }) {
    if (posts === 'undefined') return null

    return (
        <div>
            {!posts && <div>Nothing yet.</div>}
            <ul className="ms-latest-posts-list">
                {posts &&
                posts.map((post) => {
                    return (
                        <li key={post.slug}>
                            <Link href={{ pathname: `/blog/${post.slug}` }}>
                                <a>{post.frontmatter.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
