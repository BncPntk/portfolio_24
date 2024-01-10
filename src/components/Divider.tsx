import { animate } from 'motion';
import { createEffect } from 'solid-js';

export function Divider() {
  createEffect(() => {
    animate('#divider', { opacity: [0, 0.8], y: [20, 0] }, { duration: 0.3, delay: 2 });
  });

  return (
    <div class='items-center max-w-[1152px] w-full px-4 justify-center flex flex-col mx-auto relative'>
      <div id='divider' class='bg-blackSecondary h-20 w-0.5 rounded block absolute'></div>
    </div>
  );
}
