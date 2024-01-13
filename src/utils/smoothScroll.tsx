import { createEffect, createSignal, onCleanup } from 'solid-js';

export function SmoothScroll() {
  const [targetId, setTargetId] = createSignal<string | null>(null);

  createEffect(() => {
    if (targetId() !== null) {
      const targetElement = document.getElementById(targetId() || '');
      if (targetElement) {
        const offset = -80;
        const scrollOptions: ScrollToOptions = {
          top: targetElement.getBoundingClientRect().top + window.scrollY + offset,
          behavior: 'smooth',
        };
        window.scrollTo(scrollOptions);
      }
      setTargetId(null);
    }
  });

  onCleanup(() => {
    setTargetId(null);
  });

  const scrollTo = (id: string) => setTargetId(id);

  return { scrollTo };
}
