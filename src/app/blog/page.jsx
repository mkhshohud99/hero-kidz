import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "Top Fashion Trends for 2026",
        excerpt:
            "Discover the latest fashion trends that are shaping the industry this year.",
        image:
            "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBCcijrCfZBuqDzBWp3qSrBEZCqBUfQVz4CWGHWF91iaEw%3D",
        author: "Admin",
        date: "June 10, 2026",
        category: "Fashion",
    },
    {
        id: 2,
        title: "How to Choose Quality Clothing",
        excerpt:
            "Learn how to identify premium fabrics and durable clothing before purchasing.",
        image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        author: "Admin",
        date: "June 05, 2026",
        category: "Shopping Guide",
    },
    {
        id: 3,
        title: "Must-Have Accessories This Season",
        excerpt:
            "Elevate your style with these trending accessories and fashion essentials.",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
        author: "Admin",
        date: "May 28, 2026",
        category: "Lifestyle",
    },
];

export const metadata = {
    title: "Blog",
    description:
        "Read the latest fashion tips, shopping guides, product reviews, and lifestyle articles.",
};

export default function BlogPage() {
    return (
        <div className="bg-base-100">
            {/* Hero Section */}
            <section className="bg-secondary text-primary-content py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Our Blog
                    </h1>

                    <p className="text-lg max-w-2xl mx-auto">
                        Fashion tips, shopping guides, product insights,
                        and lifestyle inspiration all in one place.
                    </p>

                    <div className="max-w-xl mx-auto mt-8">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="input input-bordered w-full text-base-content"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Blog */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="hero bg-base-200 rounded-3xl overflow-hidden">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={blogs[0].image}
                            alt={blogs[0].title}
                            className="max-w-lg rounded-2xl shadow-lg"
                        />

                        <div>
                            <div className="badge badge-primary mb-4">
                                Featured
                            </div>

                            <h2 className="text-4xl font-bold mb-4">
                                {blogs[0].title}
                            </h2>

                            <p className="text-base-content/70 mb-4">
                                {blogs[0].excerpt}
                            </p>

                            <div className="flex gap-4 text-sm text-base-content/60 mb-6">
                                <span>{blogs[0].author}</span>
                                <span>•</span>
                                <span>{blogs[0].date}</span>
                            </div>

                            <Link
                                href={`/blog/${blogs[0].id}`}
                                className="btn btn-primary"
                            >
                                Read Article
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-4 mb-10">
                <div className="flex flex-wrap gap-3 justify-center">
                    <button className="btn btn-primary btn-sm">
                        All
                    </button>
                    <button className="btn btn-outline btn-sm">
                        Fashion
                    </button>
                    <button className="btn btn-outline btn-sm">
                        Shopping Guide
                    </button>
                    <button className="btn btn-outline btn-sm">
                        Lifestyle
                    </button>
                    <button className="btn btn-outline btn-sm">
                        Trends
                    </button>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="card bg-base-100 shadow-xl border border-base-200"
                        >
                            <figure>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-64 w-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <div className="badge badge-primary">
                                    {blog.category}
                                </div>

                                <h2 className="card-title">
                                    {blog.title}
                                </h2>

                                <p className="text-base-content/70">
                                    {blog.excerpt}
                                </p>

                                <div className="flex justify-between text-sm text-base-content/60 mt-3">
                                    <span>{blog.author}</span>
                                    <span>{blog.date}</span>
                                </div>

                                <div className="card-actions mt-4">
                                    <Link
                                        href={`/blog/${blog.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}