import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Post } from '../../features/posts/postsSlice';
import { useDeletePostMutation } from '../../features/posts/postsSlice';

interface AlertDialogProps {
  text: string | React.ReactNode;
  post: Post;
  context?: string; //delete/edit
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  text,
  post,
  context,
}) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  const [setEditing, setEditingState] = React.useState(false);
  const handleDelete = async (id: number) => {
    try {
      await deletePost(id).unwrap();
    } catch (err) {
      console.error(err);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // if (context === 'delete') handleDelete(Number(post.id));

    setOpen(false);
  };
  const handleConfirm = () => {
    if (context === 'delete') handleDelete(Number(post.id));

    setOpen(false);
  };
  const title =
    context === 'delete' ? 'Are you sure you want to delete this post?' : '';
  const message =
    context === 'delete' ? 'Once deleted can never be undone' : '';
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{ padding: '0', margin: '0', minWidth: '0' }}
      >
        {text}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
