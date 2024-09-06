import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Header />
            <main class="flex flex-col gap-4 py-3 px-6">
                <section class="flex flex-col gap-1 my-6">
                    <p>Welcome! Let's explore the creative world of web development together. Find inspiration through blogs and exciting projects that reflect my journey.</p>
                </section>

                <section class="flex flex-col gap-1">
                    <h2>Blog</h2>
                    <p>Explore my latest blog posts and insights on web development, design, and technology.</p>
                </section>

                <section class="flex flex-col gap-1">
                    <h2>Projects</h2>
                    <p>Discover my latest projects and contributions to the web development community.</p>
                </section>

                <section class="flex flex-col gap-1">
                    <h2>Links</h2>
                    <p>Connect with me on social media and other platforms.</p>
                </section>

                <section class="flex flex-col gap-1">
                    <h2>Contact</h2>
                    <p>Get in touch with me for collaborations or inquiries.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}