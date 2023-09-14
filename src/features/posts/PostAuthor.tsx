import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../users/usersSlice';

// Define a PropTypes interface for the props
interface PostAuthorProps {
  userId?: string; // Assuming userId is a string, update the type accordingly
}
const PostAuthor = ({ userId }: PostAuthorProps) => {
  const { data: author } = useGetUsersQuery();
  if (!userId) {
    return <span>Unknown author</span>;
  }

  if (author) {
    return (
      <span>
        by{' '}
        {author ? (
          <Link to={`/user/${userId}`}>
            {author.find((user) => user.id === userId)?.name}
          </Link>
        ) : (
          'Unknown author'
        )}
      </span>
    );
  }

  return <span>loading author</span>;
};
export default PostAuthor;
