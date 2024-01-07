import { JSX } from 'solid-js/jsx-runtime';
import { Blob } from './Blob';

interface BackgroundProps {
  children: JSX.Element;
  blobPosition?: 'left' | 'right';
  showBlob: boolean;
}

export function Background(props: BackgroundProps) {
  return (
    <div class='relative w-full min-h-screen flex overflow-hidden h-full'>
      <img class='absolute w-full h-full opacity-[.07] z-20' src='/noise_bg.jpg' />

      <div class='absolute w-full h-full bg-opacity-40 filter blur-xl z-10 '>
        <div
          class={`absolute w-[1000px] lg:w-[1400px] bottom-0 h-auto ${
            props.blobPosition === 'left' ? ' left-0' : 'right-0'
          }`}
        >
          <Blob position={props.blobPosition} showBlob={props.showBlob} />
        </div>
      </div>

      <div class='flex-1 relative z-30'>{props.children}</div>
    </div>
  );
}
