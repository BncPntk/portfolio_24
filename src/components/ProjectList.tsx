import { For, createEffect, onCleanup, createSignal } from 'solid-js';
import { projectData } from '../data/project_data';
import { Project } from './Project';
import { animate, scroll } from 'motion';
import { ProjectMobile } from './ProjectMobile';
import { Heading } from './Heading';

export function ProjectList() {
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 1024);
  let renderCounter = 0;

  createEffect(() => {
    document.querySelectorAll('.project-item').forEach((item) => {
      scroll(animate(item, { scale: [0.9, 1, 0.9] }, { easing: ['ease-in', 'ease-out'] }), {
        target: item,
        offset: ['start end', 'end end', 'start start', 'end start'],
      });
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    onCleanup(() => {
      window.removeEventListener('resize', handleResize);
    });
  });

  return (
    <section>
      <div id='projects' class='grid my-20'>
        <Heading title={'MyWorks'} />
        {isMobile() ? (
          <For each={projectData}>{(project) => <ProjectMobile project={project} />}</For>
        ) : (
          <For each={projectData}>
            {(project) => {
              const orderValuesArray = renderCounter % 2 === 0 ? [1, 2] : [2, 1]; //order-xy

              renderCounter++;
              return <Project project={project} order={orderValuesArray} class='project-item' />;
            }}
          </For>
        )}
      </div>
    </section>
  );
}
