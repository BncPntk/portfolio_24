interface Project {
  id: number;
  title: string;
  desc: string;
  path: string;
  stack: string[];
  code: string;
  demo: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'ShoeBox',
    desc: '',
    path: '/shoebox.png',
    stack: ['React', 'Tailwind CSS'],
    code: '',
    demo: '',
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
