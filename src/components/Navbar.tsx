import { For, Show, createSignal, onCleanup } from 'solid-js';
import { Hamburger } from './Hamburger';

const navItems = ['About Me', 'Projects', 'Resume'];

export function Navbar() {
  const [toggleMobileNav, setToggleMobileNav] = createSignal(false);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  function handleMobileNav() {
    setToggleMobileNav(!toggleMobileNav());
  }

  function handleResize() {
    setIsMobile(window.innerWidth < 768);
    if (!isMobile()) {
      setToggleMobileNav(false);
    }
  }

  onCleanup(() => {
    window.removeEventListener('resize', handleResize);
    setToggleMobileNav(false);
  });
  window.addEventListener('resize', handleResize);

  return (
    <nav
      class={`backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-40 ${
        isMobile() ? 'bg-background' : ''
      }`}
    >
      <div
        class={`flex justify-between items-center h-16 px-8 max-w-[1440px] mx-auto ${
          toggleMobileNav() ? 'bg-background' : ''
        }`}
      >
        <a
          href='https://bencepentek.com/'
          class='text-2xl lg:text-[22px] font-extrabold p-1.5 text-actionSecondary drop-shadow-sm tracking-wide'
        >
          bencepentek.com
        </a>
        <ul class='md:flex gap-8 text-[18px] font-semibold tracking-wider hidden'>
          <For each={navItems}>
            {(item) => (
              <li class='py-4 px-2'>
                <a
                  class='hover:cursor-pointer relative group text-fontMain hover:text-zinc-600 duration-300'
                  href='#'
                >
                  {item}
                  <div class='absolute w-full h-0.5 rounded bg-actionSecondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
                </a>
              </li>
            )}
          </For>
        </ul>
        {/* mobile */}
        <Hamburger isOpen={toggleMobileNav()} onClick={handleMobileNav} />
        <Show when={toggleMobileNav()} fallback={null}>
          <div class='fixed left-0 top-16 w-screen h-screen bg-background'>
            <ul class='pt-16 px-8 text-2xl font-bold text-center mx-auto'>
              <For each={navItems}>
                {(item) => (
                  <li class='py-6 px-4'>
                    <a href='#' class='text-fontMain hover:text-zinc-600 duration-300'>
                      {item}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </Show>
      </div>
    </nav>
  );
}
