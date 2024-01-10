interface HeadingProps {
  title: string;
}

export function Heading(props: HeadingProps) {
  return (
    <div class='max-w-[1152px] w-full px-4 justify-center text-center flex flex-col mx-auto my-24'>
      <h2 class='text-3xl font-bold text-actionMain my-2'>{props.title}</h2>
    </div>
  );
}
