import { For, Show } from 'solid-js';
import { Hamburger } from './Hamburger';

type NavMobileProps = {
  toggleMobileNav: Function;
  onMobileNav: () => void;
  onNavClick: (id: string, e: Event) => void;
  navItems: string[];
};

export function NavMobile(props: NavMobileProps) {
  return (
    <>
      <Hamburger isOpen={props.toggleMobileNav()} onClick={props.onMobileNav} />
      <Show when={props.toggleMobileNav()} fallback={null}>
        <div class='fixed left-0 top-16 w-screen h-screen bg-background'>
          <ul class='pt-16 px-8 text-2xl font-bold text-center mx-auto'>
            <For each={props.navItems}>
              {(item, i) => (
                <li class='py-6 px-4'>
                  <a
                    href={item.toLowerCase()}
                    onClick={(e) => props.onNavClick(item.toLowerCase(), e)}
                    class={`${
                      i() === props.navItems.length - 1
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
    </>
  );
}
