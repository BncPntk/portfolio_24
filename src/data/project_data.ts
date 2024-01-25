interface Project {
  id: number;
  title: string;
  desc: string;
  warning?: string;
  path: string;
  stack: string[];
  code: string;
  demo: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'ShoeBox',
    desc: 'A fictional online shoe store with multiple filtering options, offering a straightforward and efficient way to discover and buy shoes.',
    warning:
      'Expect the first load time to be around 1.4 mins as Render spins down its Free service after 15 mins without traffic.',
    path: '/shoebox.png',
    stack: ['React', 'React Router', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/BncPntk/ShoeBox',
    demo: 'https://bncpntk-shoebox.netlify.app/',
  },
  {
    id: 2,
    title: 'EasyGrocery',
    desc: 'EasyGrocery is a user-friendly React-based shopping list app designed to simplify your grocery shopping experience.',
    path: '/easygrocery.png',
    stack: ['React', 'CSS'],
    code: 'https://github.com/BncPntk/EasyGrocery',
    demo: 'https://bncpntk-easy-grocery.netlify.app/',
  },
  {
    id: 3,
    title: 'SwiftShift Movers',
    desc: `This is a fictional moving team's online platform for hassle-free appointment scheduling, mainly built to practice Tailwind CSS.`,
    path: '/swiftshiftmovers.png',
    stack: ['React', 'Tailwind CSS'],
    code: 'https://github.com/BncPntk/SwiftShift-Movers',
    demo: 'https://bncpntk-swiftshift-movers.netlify.app/',
  },
];
