import SplitType from 'split-type';
import { createEffect } from 'solid-js';
import { animate, stagger } from 'motion';
import { FaBrandsSquareGithub } from 'solid-icons/fa';
import { IoLogoLinkedin } from 'solid-icons/io';

export function Hero() {
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
  });

  return (
    <section class='max-w-[1152px] w-full px-4 justify-center flex flex-col mx-auto h-screen'>
      <div class='text-center'>
        <h1 id='heading' class='text-8xl font-extrabold text-fontMain mb-4 max-w-3xl mx-auto'>
          BENCE PÉNTEK
        </h1>
        <h2 id='desc' class='text-2xl font-bold text-fontSecondary mb-4 max-w-3xl mx-auto'>
          Full Stack Developer | Aspiring UI/UX Designer
        </h2>
        <div class='flex justify-end max-w-3xl mx-auto px-9 gap-3'>
          <FaBrandsSquareGithub class='github-icon text-[36px] text-fontSecondary hover:cursor-pointer' />
          <IoLogoLinkedin class='linkedin-icon text-[36px] text-fontSecondary hover:cursor-pointer ' />
        </div>
      </div>
    </section>
  );
}
