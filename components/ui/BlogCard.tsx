import { FC } from 'react';

interface Props {
  title: string;
  desc: string;
}

const BlogCard: FC<Props> = ({title, desc}): JSX.Element => {
  return (
    <div className="bg-green-100 p-2 rounded">
      <h1 className='text-gray-900 text-3xl font-semibold'>{title}</h1>
      <p className='text-gray-500'>{desc}</p>
    </div>
  );
};

export default BlogCard;