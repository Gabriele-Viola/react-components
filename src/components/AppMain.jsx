import BlogCard from "./BlogCard/BlogCard"

export default function AppMain() {
    const titleMain = 'this is my main'

    return (
        <main>
            <div className="container">
                <div className="row">
                    <BlogCard />

                </div>

            </div>
        </main>
    )
}