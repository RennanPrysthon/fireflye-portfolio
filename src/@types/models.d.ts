interface ProjectType {
  id: number;
  name: string;
  description: string;
  img: string;
}

interface Props {
  variant: 'red' | 'white' | 'transparent';
  img?: string;
}

interface MenuProps {
  number: number;
  name: string;
  link: string;
}
