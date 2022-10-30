import { InferGetStaticPropsType, NextPage } from 'next';
import { useEffect, useState } from 'react';
import BlogCard from '../components/ui/BlogCard';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

interface PostApiResponse {
  postInfo: {
    title: string;
    meta: string;
    slug: string;
  }[];
}

const Blogs: NextPage<Props> = ({posts}) => {

  return (
    <div className='max-w-3xl mx-auto p-5 space-y-5'>
      {posts.map(post => 
        <BlogCard key={post.title} title={post.title} desc={post.meta} />
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const {postInfo}:PostApiResponse = await fetch('http://localhost:3000/api/posts').then((data) => data.json());

  return {
    props: {
      posts: postInfo,
    },
  }
};

export default Blogs;