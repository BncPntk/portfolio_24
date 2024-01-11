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
  numbers: number[];
  class: string;
};

export function Project(props: ProjectProps) {
  const leftOrder = `order-${props.numbers[0]}`;
  const rightOrder = `order-${props.numbers[1]}`;
  // const leftOrder = `order-2`;
  // const rightOrder = `order-1`;
  console.log(props.numbers);
  console.log(leftOrder);
  console.log(rightOrder);

  return (
    <div class={props.class}>
      <div class='flex max-w-[1152px] w-full max-h-fit mx-auto py-28'>
        <section class={`max-w-[1152px] px-4 justify-center flex flex-col mx-auto`}>
          <div class='grid lg:grid-cols-2 gap-20 items-center text-lg px-12'>
            <div class={`${leftOrder}`}>
              <h4 class=' mb-4 font-bold text-4xl'>{props.project.title}</h4>
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
                  target='blank_'
                  class='py-1.5 px-4  text-[14px] bg-blackSecondary hover:bg-blackTertiary hover:duration-300 rounded-lg flex items-center gap-3'
                >
                  <span>Code</span>
                  <FaSolidCode class='text-2xl' />
                </a>
                <a
                  href={props.project.demo}
                  target='blank_'
                  class='py-1.5 px-4 text-[14px] bg-blackSecondary hover:bg-blackTertiary hover:duration-300 rounded-lg flex items-center gap-3'
                >
                  <span>Live Demo</span>
                  <FaSolidEarthEurope class='text-2xl' />
                </a>
              </div>
            </div>
            <div
              class={`${rightOrder} w-[500px] outline outline-offset-8 outline-1 outline-titleOne rounded-lg`}
            >
              <img
                class='projectTitle object-fill opacity-1 rounded-lg outline outline-offset-1 outline-1 outline-blackMain '
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
