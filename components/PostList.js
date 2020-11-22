import Link from 'next/link'

export default function PostList({ posts }) {
    if (posts === 'undefined') return null

    const newPosts = posts.sort((a, b) => (a.frontmatter.id > b.frontmatter.id) ? -1 : 1);

    return (
        <div>
            {!posts && <div>Nothing yet.</div>}
            <ul className="ms-latest-posts-list">
                {newPosts &&
                    newPosts.map((post) => {
                        return (
                            <li key={post.frontmatter.id}>
                                <Link href={{ pathname: `/blog/${post.slug}` }}>
                                    <a className="ms-latest-posts-list__link">
                                        {post.frontmatter.title}
                                        <span> - </span>
                                        <p className="date">{post.frontmatter.date}</p>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
