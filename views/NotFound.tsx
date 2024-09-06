export default function NotFound() {
    return (
        <div class="fixed inset-0 flex flex-col gap-4 items-center justify-center">
            <h1 class="text-4xl font-bold">404</h1>
            <p class="text-lg">Page not found</p>
            <a href="/" class="text-blue-500">Go to home</a>
        </div>
    )
}