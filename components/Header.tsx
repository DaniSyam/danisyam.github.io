import { A } from "@solidjs/router"
import { Icon } from '@iconify-icon/solid';
import { createSignal } from 'solid-js';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen());
    };

    return (
        <header class="flex justify-between items-center py-3 px-6 shadow">
            <A href="/">
                <h1 class="text-2xl font-semibold">Dani S</h1>
            </A>
                <nav class={`fixed top-16 bg-white shadow rounded transition-all duration-300 ${isMenuOpen() ? 'right-6' : 'right-[-100%]'}`}>
                <ul class="flex flex-col gap-4 p-4">
                    <li>
                        <A href="/">Home</A>
                    </li>
                    <li>
                        <A href="/blog">Blog</A>
                    </li>
                    <li>
                        <A href="/Projects">Projects</A>
                    </li>
                </ul>
            </nav>
            <div class="flex items-center gap-4 text-3xl">
                <button class="flex">
                    <Icon icon="material-symbols-light:light-mode" />
                </button>
                <button onClick={toggleMenu} class="flex">
                    <Icon icon="material-symbols-light:menu" />
                </button>
            </div>
        </header>
    )
}