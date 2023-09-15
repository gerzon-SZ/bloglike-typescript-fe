// import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import PostAuthor from '../features/posts/PostAuthor';
import PostEditDelete from './PostEditDelete';
import TimeAgo from '../features/posts/TimeAgo';
import { Post } from '../features/posts/postsSlice';
interface FeaturedPostProps {
  postDetails: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ postDetails }) => {
  // const { post } = useGetPostsQuery();

  return (
    <article>
      <Card sx={{ display: 'flex', minHeight: '100%' }}>
        <CardContent sx={{ flex: 1, minHeight: '100%', position: 'relative' }}>
          <Typography component="h2" variant="h5">
            {postDetails?.title.substring(0, 20)} ...
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <PostAuthor userId={postDetails?.userId} />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <TimeAgo timestamp={postDetails?.createdAt} />
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {postDetails?.body.substring(0, 40)}...
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <Link to={`post/${postDetails?.id}`}>Continue reading...</Link>
          </Typography>
          <PostEditDelete post={postDetails} />
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          image={postDetails?.image || 'https://source.unsplash.com/random'}
          alt={postDetails?.imageLabel}
        />
      </Card>
    </article>
  );
};

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedPost;
