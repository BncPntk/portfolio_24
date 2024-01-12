interface HeadingProps {
  title: string;
}

export function Heading(props: HeadingProps) {
  return (
    <div class='max-w-[1152px] w-full justify-center md:text-start text-end flex flex-col mx-auto mb-24 opacity-[0.9] px-6'>
      <h2 class='text-2xl font-bold text-titleOne'>{`<${props.title}>`}</h2>
    </div>
  );
}
