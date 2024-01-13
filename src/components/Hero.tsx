import SplitType from 'split-type';
import { createEffect, createSignal, onCleanup } from 'solid-js';
import { animate, stagger } from 'motion';
import { FaBrandsSquareGithub } from 'solid-icons/fa';
import { IoLogoLinkedin } from 'solid-icons/io';

export function Hero() {
  const [textAnimationFinished, setTextAnimationFinished] = createSignal(false);

  createEffect(() => {
    const heading = new SplitType('#heading', { types: 'chars' });
    const desc = new SplitType('#desc', { types: 'words' });
    const headingWords = heading.chars as HTMLElement[];
    const descLines = desc.words as HTMLElement[];
    const heroElements = [...headingWords, ...descLines];

    animate(heroElements, { y: [80, 0], opacity: [0, 1] }, { duration: 0.8, delay: stagger(0.04) });

    const githubIcon = document.querySelector('.github-icon') as SVGAElement;
    const linkedinIcon = document.querySelector('.linkedin-icon') as SVGAElement;

    animate([githubIcon, linkedinIcon], { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: 1 });

    const timeoutId = setTimeout(() => {
      setTextAnimationFinished(true);
    }, 900);

    onCleanup(() => {
      clearTimeout(timeoutId);
    });
  });

  return (
    <section class='max-w-[1152px] w-full px-4 justify-center flex flex-col mx-auto h-screen pt-40'>
      <div class='text-center mb-40'>
        <h1
          id='heading'
          class={
            textAnimationFinished()
              ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-titleName mb-4 max-w-3xl mx-auto transition-all duration-1000 drop-shadow-lg'
              : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-blackMain mb-4 max-w-3xl mx-auto'
          }
        >
          BENCE PÉNTEK
        </h1>
        <h2 id='desc' class='sm:text-lg lg:text-2xl font-bold text-text mb-4 max-w-3xl mx-auto'>
          Full Stack Developer | Aspiring UI/UX Designer
        </h2>
        <div class='flex justify-end max-w-3xl mx-auto px-4 sm:px-12 md:px-28 lg:px-9 gap-3'>
          <a href='https://github.com/BncPntk' target='_blank'>
            <FaBrandsSquareGithub class='scale-09 github-icon text-[42px] text-action transition duration-300 hover:cursor-pointer hover:text-actionHover hover:duration-300' />
          </a>
          <a href='https://www.linkedin.com/in/bncpntk/' target='_blank'>
            <IoLogoLinkedin class='scale-09 linkedin-icon text-[42px] text-action hover:cursor-pointer transition duration-300 hover:text-actionHover hover:duration-300' />
          </a>
        </div>
      </div>
    </section>
  );
}
