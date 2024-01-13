import { For, Show, createSignal, onCleanup } from 'solid-js';
import { Hamburger } from './Hamburger';
import { SmoothScroll } from '../utils/smoothScroll';

const navItems = ['About', 'Projects', 'Resume'];

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

  const smoothScroll = SmoothScroll();

  const handleNavClick = (id: string, e: Event) => {
    e.preventDefault();
    console.log('Clicked on:', id);
    smoothScroll.scrollTo(id);
    setToggleMobileNav(false);
  };

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
          class='text-2xl lg:text-[22px] font-extrabold p-1.5 text-action drop-shadow-sm tracking-wide'
        >
          bencepentek
        </a>
        <ul class='md:flex gap-8 text-[18px] font-semibold tracking-wide hidden'>
          <For each={navItems}>
            {(item, i) => (
              <li
                class={`${
                  i() === navItems.length - 1 ? ' scale-09' : ''
                } py-4 px-2 text-action hover:text-trivial `}
              >
                <a
                  class={`${
                    i() === navItems.length - 1
                      ? 'bg-action rounded text-blueLight px-4 py-2 transition hover:text-action  hover:bg-blueLight duration-300 hover:cursor-pointer hover:duration-300'
                      : 'hover:text-blackSecondary'
                  } hover:cursor-pointer relative group text-blackMain transition duration-300 `}
                  href={item.toLowerCase()}
                  onClick={(e) => handleNavClick(item.toLowerCase(), e)}
                >
                  {item}
                  <div
                    class={`${
                      i() === navItems.length - 1
                        ? ''
                        : 'h-0.5 rounded bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-300'
                    }absolute w-full`}
                  />
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
                {(item, i) => (
                  <li class='py-6 px-4'>
                    <a
                      href={item.toLowerCase()}
                      onClick={(e) => handleNavClick(item.toLowerCase(), e)}
                      class={`${
                        i() === navItems.length - 1
                          ? 'text-blueLight bg-action px-20 py-2 rounded'
                          : 'text-action hover:text-trivial'
                      }  duration-300`}
                    >
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
