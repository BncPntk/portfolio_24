import { AiOutlineCaretUp } from 'solid-icons/ai';

export function Footer() {
  return (
    <footer class='border-b-[6px] border-b-titleName pt-20'>
      <div class='flex h-16 px-4 md:px-8 max-w-[1440px] mx-auto items-center justify-between text-[12px] md:text-[14px] text-title '>
        <div class='flex gap-2 '>
          <p class='uppercase font-extrabold'>{`Last updated 1/13/2024`}</p>
        </div>
        <a href='/' class='flex items-center gap-1 scale-09'>
          <p class='uppercase font-extrabold'>Back to top</p>
          <AiOutlineCaretUp class='text-title text-2xl' />
        </a>
      </div>
    </footer>
  );
}
