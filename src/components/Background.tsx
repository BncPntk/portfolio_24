import { Blob } from './Blob';

interface BackgroundProps {
  children: any;
  blobPosition?: 'left' | 'right';
  showBlob: boolean;
}

export function Background({ children, blobPosition, showBlob }: BackgroundProps) {
  return (
    <div class='relative bg-background w-full min-h-screen flex overflow-hidden h-full border-2 border-slate-800'>
      <div class='flex-1'>{children}</div>
      <div
        class={`absolute w-[1000px] lg:w-[1400px] bottom-0 h-auto ${
          blobPosition === 'left' ? ' left-0' : 'right-0'
        }`}
      >
        <Blob position={blobPosition} showBlob={showBlob} />
      </div>
    </div>
  );
}
