interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Hamburger(props: HamburgerProps) {
  return (
    <div class={`flex md:hidden`}>
      <input type='checkbox' id='menu' class='peer hidden' checked={props.isOpen} onChange={props.onClick} />
      <label for='menu' class='peer-checked:menu p-2.5 min-h-10 cursor-pointer md:hidden'>
        <div
          class={`m-auto h-0.5 w-8 rounded bg-action transform ${
            props.isOpen ? 'rotate-45 translate-y-1.5' : ''
          } duration-300`}
        ></div>
        <div class={`m-auto h-0.5 w-8 mt-2 rounded bg-action ${props.isOpen ? 'hidden' : ''}`}></div>
        <div
          class={`m-auto h-0.5 w-8 mt-2 rounded bg-action ${
            props.isOpen ? '-rotate-45 -translate-y-1' : ''
          } duration-300`}
        ></div>
      </label>
    </div>
  );
}
