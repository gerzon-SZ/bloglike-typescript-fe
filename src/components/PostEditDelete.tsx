import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import styled from '@emotion/styled';
import { AlertDialog } from './dialogs/AlertDialog';
import { BasicModal } from './BasicModal';
import { Post } from '../features/posts/postsSlice';
interface PostEditDeleteProps {
  post: Post;
}
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 0.25rem;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0px 5px 5px 0px;
`;

const PostEditDelete: React.FC<PostEditDeleteProps> = ({ post }) => {
  return (
    <ActionButtonContainer>
      <BasicModal
        text={<EditIcon sx={{ maxHeight: '20px', cursor: 'pointer' }} />}
        post={post}
        context="edit post"
      />
      <AlertDialog
        text={<DeleteIcon sx={{ maxHeight: '20px', cursor: 'pointer' }} />}
        post={post}
        context="delete"
      />
    </ActionButtonContainer>
  );
};
export default PostEditDelete;
