import FeaturedPost from '../../components/FeaturedPost';
import { useGetPostsQuery } from './postsSlice';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

const PostsList = () => {
  const { data: posts, isLoading, isSuccess, isError } = useGetPostsQuery();
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) {
      console.log(selectedPost, 'selectedPost');
    }
  }, [selectedPost]);

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  }
  if (isSuccess) {
    console.log(posts);
    content = posts.ids
      .filter((id) => posts.entities[id] !== undefined)
      .map((id) => {
        return (
          <Grid item xs={12} md={4} key={id}>
            <FeaturedPost key={id} postDetails={posts.entities[id]} />
          </Grid>
        );
      });
  }
  if (isError) {
    content = <p></p>;
  }
  return (
    <section>
      <Grid container spacing={1}>
        {content}
      </Grid>
    </section>
  );
};
export default PostsList;
