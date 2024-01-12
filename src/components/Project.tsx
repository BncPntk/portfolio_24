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
  class: string;
  order: number[];
};

export function Project(props: ProjectProps) {
  const orderOne = `order-${props.order[0]}`;
  const orderTwo = `order-${props.order[1]}`;

  return (
    <div class={`${props.class}`}>
      <div class='flex max-w-[1152px] w-full max-h-fit mx-auto py-28'>
        <section class={`max-w-[1152px] px-4 justify-center flex flex-col mx-auto`}>
          <div class={`grid lg:grid-cols-2 gap-10 xl:gap-20 items-center text-lg px-4`}>
            <div class={orderOne}>
              <h4 class=' mb-4 font-bold lg:text-3xl xl:text-4xl'>{props.project.title}</h4>
              <p class='mb-10 text-xl'>{props.project.desc}</p>
              <ul class='flex flex-wrap gap-6 mb-14'>
                <For each={props.project.stack}>
                  {(stack) => (
                    <li class='min-w-24 outline outline-offset-2 outline-1 outline-titleOne text-blackMain rounded-full text-center px-6'>
                      {stack}
                    </li>
                  )}
                </For>
              </ul>
              <div class='flex gap-6 text-background justify-end'>
                <a
                  href={props.project.code}
                  target='_blank'
                  class='py-1.5 px-4  text-[14px] bg-blackSecondary hover:bg-blackTertiary hover:duration-300 rounded-lg flex items-center gap-3'
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
              class={`${orderTwo} w-[550px] lg:w-[450px] xl:w-[500px] mx-auto outline outline-offset-8 outline-1 outline-titleOne rounded-lg`}
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
