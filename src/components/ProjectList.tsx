import { For, createEffect, onCleanup, createSignal } from 'solid-js';
import { projectData } from '../data/project_data';
import { Project } from './Project';
import { animate, scroll } from 'motion';
import { ProjectMobile } from './ProjectMobile';

export function ProjectList() {
  const orderValues: number[] = [1, 2, 4, 3, 5, 6, 8, 7]; // Change for different order
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 1024);

  createEffect(() => {
    document.querySelectorAll('.project-item').forEach((item) => {
      scroll(animate(item, { scale: [1, 1, 1] }, { easing: ['ease-in', 'ease-out'] }), {
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
      <div class='grid' id='projectsGrid'>
        {isMobile() ? (
          <For each={projectData}>{(project) => <ProjectMobile project={project} />}</For>
        ) : (
          <For each={projectData}>
            {(project, index) => {
              const castedIndex: number = index() as number;
              const numberPair: number[] = [orderValues[castedIndex * 2], orderValues[castedIndex * 2 + 1]];
              return <Project project={project} numbers={numberPair} class='project-item' />;
            }}
          </For>
        )}
      </div>
    </section>
  );
}
