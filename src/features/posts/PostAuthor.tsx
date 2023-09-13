import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../users/userSlice';

// Define a PropTypes interface for the props
interface PostAuthorProps {
  userId: string; // Assuming userId is a string, update the type accordingly
}
const PostAuthor = ({ userId }: PostAuthorProps) => {
  const { user: author } = useGetUsersQuery('getUsers', {
    selectFromResult: ({ data, isLoading }) => ({
     const user: User | undefined =  data?.entities[userId],
    }),
  });

  return (
    <span>
      by{' '}
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        'Unknown author'
      )}
    </span>
  );
};
export default PostAuthor;
