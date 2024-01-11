import { FaSolidCode, FaSolidEarthEurope } from 'solid-icons/fa';
import { For } from 'solid-js';

type ProjectProps = {
  project: {
    title: string;
    desc: string;
    path: string;
    stack: string[];
    code: string;
    demo: string;
  };
};

export function ProjectMobile(props: ProjectProps) {
  return (
    <div>
      <div class='flex max-w-[1152px] w-full max-h-fit mx-auto py-20 md:py-24'>
        <section class={`max-w-[1152px] px-4 justify-center flex flex-col mx-auto`}>
          <div class={`grid lg:grid-cols-2 gap-8 xl:gap-20 items-center text-lg px-8`}>
            <div class={`order-2`}>
              <h4 class='mb-2 font-bold text-2xl sm:text-4xl text-center'>{props.project.title}</h4>
              <p class='mb-10 sm:text-xl text-center mx-2'>{props.project.desc}</p>
              <ul class='flex flex-wrap gap-4 mb-8 justify-evenly md:mb-12 md:gap-8 md:justify-center'>
                <For each={props.project.stack}>
                  {(stack) => (
                    <li class='min-w-24 outline outline-offset-2 outline-1 outline-titleOne text-blackMain rounded-full text-center px-4'>
                      {stack}
                    </li>
                  )}
                </For>
              </ul>
              <div class='flex gap-6 sm:gap-12 text-background justify-center'>
                <a
                  href={props.project.code}
                  target='_blank'
                  class='py-1.5 px-4 text-[14px] bg-blackSecondary hover:bg-blackTertiary hover:duration-300 rounded-lg flex items-center gap-3'
                >
                  <span>Code</span>
                  <FaSolidCode class='text-2xl' />
                </a>
                <a
                  href={props.project.demo}
                  target='_blank'
                  class='py-1.5 px-4 text-[14px] bg-blackSecondary hover:bg-blackTertiary hover:duration-300 rounded-lg flex items-center gap-3'
                >
                  <span>Live Demo</span>
                  <FaSolidEarthEurope class='text-2xl' />
                </a>
              </div>
            </div>
            <div
              class={`max-w-[550px] mx-auto outline outline-offset-8 outline-1 outline-titleOne rounded-lg order-1`}
            >
              <img
                class='projectTitle object-fill opacity-1 rounded-lg outline outline-offset-1 outline-1 outline-blackMain'
                src={`${props.project.path}`}
                alt=''
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
