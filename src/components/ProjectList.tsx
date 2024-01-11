import { For, createEffect } from 'solid-js';
import { projectData } from '../data/project_data';
import { Project } from './Project';
import { animate, scroll } from 'motion';

export function ProjectList() {
  const orderValues: number[] = [1, 2, 4, 3, 6, 5, 8, 7]; // Change for different order

  createEffect(() => {
    document.querySelectorAll('.project-item').forEach((item) => {
      scroll(animate(item, { scale: [0.9, 1, 0.9] }, { easing: ['ease-in', 'ease-out'] }), {
        target: item,
        offset: ['start end', 'end end', 'start start', 'end start'],
      });
    });
  });

  return (
    <section>
      <div class='grid' id='projectsGrid'>
        <For each={projectData}>
          {(project, index) => {
            const castedIndex: number = index() as number;
            const numberPair: number[] = [orderValues[castedIndex * 2], orderValues[castedIndex * 2 + 1]];

            return <Project project={project} numbers={numberPair} class='project-item' />;
          }}
        </For>
      </div>
    </section>
  );
}
