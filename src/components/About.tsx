import { For, createEffect } from 'solid-js';
import { Heading } from './Heading';
import { animate, scroll } from 'motion';

export function About() {
  const devSkills = [
    `SASS, BOOTSTRAP, TAILWIND, CSS`,
    'GIT',
    'SQL',
    'PHP',
    'SYMFONY',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
  ];

  createEffect(() => {
    const item = document.querySelector('#about-me');

    if (item) {
      scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
        target: item,
        offset: ['start end', 'end end', 'start start', 'end start'],
      });
    }
  });

  const tools = ['FIGMA', 'ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR', 'ADOBE AFTER EFFECTS'];
  return (
    <section class='max-w-[1152px] w-full px-4 justify-center flex flex-col mx-auto h-screen '>
      {/* <Heading title={'About me'} /> */}

      <div id='about-me' class='grid sm:grid-cols-2 gap-40 items-center text-2xl text-blackSecondary'>
        {/* left part */}
        <div class='text-end font-bold'>
          <div class='pb-8'>
            <h3 class='text-actionSecondary font-extrabold text-3xl pb-2'>DEVELOPMENT</h3>
            <ul>
              <For each={devSkills}>{(skill) => <li>{skill}</li>}</For>
            </ul>
          </div>
          <div>
            <h3 class='text-actionSecondary font-extrabold text-3xl pb-2'>MULTIMEDIA TOOLS</h3>
            <ul>
              <For each={tools}>{(tool) => <li>{tool}</li>}</For>
            </ul>
          </div>
        </div>
        {/* right part */}
        <div class='text-start text-xl leading-8'>
          <h3 class='text-actionSecondary font-bold text-xl pb-2'>WHO AM I?</h3>
          <p class=''>
            <span class='pb-6 block'>
              I am a Full Stack Developer with a newfound passion for UI/UX design. Ever since childhood, I
              found joy in expressing my imagination through drawings on paper.
            </span>
            <span class='pb-6 block'>
              Transitioning that into digital art, I've explored various mediums and tools to bring my ideas
              to life. The ability to turn creative concepts into functional and interactive solutions
              fascinated me, leading me to become a developer.
            </span>
            <span class='pb-6 block'>
              Beyond coding, I'm a music enthusiast and find joy in music production. I've recently been
              embarking on video editing, using After Effects as my new fun stuff.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
