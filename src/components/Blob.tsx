import { Show } from 'solid-js';

interface BlobProps {
  position?: 'left' | 'right';
  showBlob: boolean;
}

export function Blob(props: BlobProps) {
  const isLeft = props.position === 'left';

  return (
    <Show when={props.showBlob}>
      <>
        <svg
          class={`w-full h-full ${isLeft ? 'scale-x-[-1]' : ''}`}
          viewBox='-230 -140 300 300'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='gradient' x1='40%' y1='20%' x2='100%' y2='100%'>
              <stop offset='0%' style='stop-color:#2EE3DA' />
              <stop offset='100%' style='stop-color:#1D5490' />
            </linearGradient>
          </defs>
          <path fill='url(#gradient)' transform='translate(100 100)'>
            <animate
              attributeName='d'
              dur='20000ms'
              repeatCount='indefinite'
              values='M32,-33.9C37.8,-26.2,36.4,-13.1,36.4,0C36.4,13.1,37.9,26.2,32.1,33.4C26.2,40.6,13.1,41.8,-0.6,42.4C-14.3,43,-28.5,42.9,-43.1,35.7C-57.7,28.5,-72.7,14.3,-70.7,2C-68.7,-10.3,-49.8,-20.6,-35.2,-28.3C-20.6,-36,-10.3,-41.1,1.4,-42.5C13.1,-43.8,26.2,-41.6,32,-33.9Z;
            
            M37,-44C41.1,-32.8,32.9,-16.4,28,-5C23,6.5,21.3,13,17.1,23.7C13,34.4,6.5,49.2,-2.1,51.2C-10.6,53.3,-21.2,42.6,-33.6,31.9C-45.9,21.2,-60,10.6,-65.4,-5.4C-70.9,-21.5,-67.7,-43,-55.3,-54.2C-43,-65.3,-21.5,-66.2,-2.5,-63.6C16.4,-61.1,32.8,-55.2,37,-44Z;
            
            M30,-30C41.6,-18.4,55.6,-9.2,58.4,2.8C61.2,14.9,53,29.8,41.4,40.8C29.8,51.8,14.9,58.8,4.9,53.9C-5,48.9,-10.1,32,-25.2,21.1C-40.2,10.1,-65.3,5,-66.6,-1.3C-67.9,-7.6,-45.3,-15.2,-30.3,-26.7C-15.2,-38.2,-7.6,-53.7,0.8,-54.5C9.2,-55.3,18.4,-41.5,30,-30Z;
            
            M29.5,-25.5C41.3,-17.8,55.9,-8.9,60.8,4.9C65.7,18.7,60.8,37.3,49.1,44.1C37.3,50.9,18.7,45.8,-0.9,46.6C-20.4,47.5,-40.8,54.4,-53.5,47.6C-66.2,40.8,-71.1,20.4,-63.5,7.6C-56,-5.3,-35.9,-10.6,-23.2,-18.3C-10.6,-26,-5.3,-36.1,1.8,-37.9C8.9,-39.7,17.8,-33.2,29.5,-25.5Z;
            
            M25.4,-26.9C30.4,-20.4,30.2,-10.2,26.8,-3.4C23.4,3.4,16.9,6.9,11.9,11.7C6.9,16.5,3.4,22.7,-3,25.7C-9.5,28.7,-18.9,28.6,-35.5,23.8C-52.1,18.9,-75.9,9.5,-82.7,-6.8C-89.6,-23.1,-79.5,-46.2,-62.9,-52.7C-46.2,-59.1,-23.1,-48.8,-6.5,-42.3C10.2,-35.9,20.4,-33.3,25.4,-26.9Z;
            
            M32,-33.9C37.8,-26.2,36.4,-13.1,36.4,0C36.4,13.1,37.9,26.2,32.1,33.4C26.2,40.6,13.1,41.8,-0.6,42.4C-14.3,43,-28.5,42.9,-43.1,35.7C-57.7,28.5,-72.7,14.3,-70.7,2C-68.7,-10.3,-49.8,-20.6,-35.2,-28.3C-20.6,-36,-10.3,-41.1,1.4,-42.5C13.1,-43.8,26.2,-41.6,32,-33.9Z'
            ></animate>
          </path>
        </svg>
      </>
    </Show>
  );
}
