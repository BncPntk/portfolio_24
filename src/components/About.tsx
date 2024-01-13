import { For, createEffect } from 'solid-js';
import { Heading } from './Heading';
import { animate, scroll } from 'motion';

export function About() {
  const devSkills = [
    `Sass, Bootstrap, Tailwind CSS`,
    'SQL, MongoDB',
    'PHP',
    'Symfony',
    'Node.js',
    'TypeScript',
    'SolidJS',
    'React',
  ];

  createEffect(() => {
    const item = document.querySelector('#about-me');

    if (item && window.innerWidth >= 768) {
      scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
        target: item,
        offset: ['start end', 'end end', 'start start', 'end start'],
      });
    }
  });

  const tools = ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'];
  return (
    <section class='max-w-[1152px] w-full px-2 justify-center flex flex-col mx-auto h-fit my-20'>
      <Heading title={'AboutMe'} />

      <div
        id='about-me'
        class='grid md:grid-cols-2 items-center text-2xl text-textImportant justify-around gap-10 md:gap-16 lg:gap-28 px-6 md:px-0'
      >
        {/* left part */}
        <div class='text-start md:text-end font-bold md:pl-8 order-2 md:order-1'>
          <div class='pb-8 md:pb-12'>
            <h3 class='text-highlight font-extrabold text-3xl pb-2 md:pb-3 text-start md:text-end drop-shadow-sm subpixel-antialiased'>
              DEVELOPMENT
            </h3>
            <ul>
              <For each={devSkills}>
                {(skill) => <li class='leading-normal md:leading-relaxed subpixel-antialiased'>{skill}</li>}
              </For>
            </ul>
          </div>
          <div>
            <h3 class='text-highlight font-extrabold text-3xl pb-2 md:pb-3 text-end md:text-end drop-shadow-sm subpixel-antialiased'>
              MULTIMEDIA TOOLS
            </h3>
            <ul>
              <For each={tools}>
                {(tool) => (
                  <li class='leading-normal md:leading-relaxed text-end subpixel-antialiased'>{tool}</li>
                )}
              </For>
            </ul>
          </div>
        </div>
        {/* right part */}
        <div class='text-start text-xl md:text-lg lg:text-xl leading-normal md:leading-relaxed md:pr-8 order-1  md:order-2'>
          <h3 class='text-success font-extrabold text-2xl pb-2'>Who Am I?</h3>
          <p class='max-w-[600px] text-text'>
            <span class='pb-3 md:pb-6 block'>
              I am a Full Stack Developer with a newfound passion for UI/UX design. Ever since childhood, I
              found joy in expressing my imagination through drawings on paper.
            </span>
            <span class='pb-3 md:pb-6 block'>
              Transitioning that into digital art, I've explored various mediums and tools to bring my ideas
              to life. The ability to turn creative concepts into functional and interactive solutions
              fascinated me, leading me to become a developer.
            </span>
            <span class='pb-3 md:pb-6 block'>
              Beyond coding, I'm a music enthusiast and find joy in music production. I've recently been
              embarking on video editing, using After Effects as my new fun stuff.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
