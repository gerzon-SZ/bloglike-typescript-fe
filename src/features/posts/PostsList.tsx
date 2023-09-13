import FeaturedPost from '../../components/FeaturedPost';
import { useGetPostsQuery } from '../posts/postSlice';
import Grid from '@mui/material/Grid';

const PostsList = () => {
  const { data: posts, isLoading, isSuccess, isError } = useGetPostsQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  }
  if (isSuccess) {
    console.log(posts);
    content = posts.ids.map((postId) => {
      return (
        <Grid item xs={12} md={4} key={postId}>
          <FeaturedPost key={postId} postId={postId} />
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
