import Container from '@mui/material/Container';
import InputFormText from './inputs/inputFormText';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { useAddPostMutation } from '../features/posts/postsSlice';
interface PostFormProps {
  context: string;
}
interface PostFormValues {
  title: string;
  body: string;
  userId: number;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const styledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function FormPost({ context }: PostFormProps) {
  const { control, handleSubmit, formState } = useForm();
  const canSave = !formState.isSubmitting;
  const [addNewPost, { isLoading }] = useAddPostMutation();
  const onSubmit = async (data: PostFormValues) => {
    if (canSave) {
      try {
        await addNewPost(data).unwrap();
      } catch (err) {
        console.error('Failed to save the post', err);
      }
    }
  };
  return (
    <Container maxWidth="sm">
      <h2>Add a New Post</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputFormText
          type="text"
          name="title"
          label="Post Title"
          control={control}
          rules={{ required: 'Title is required' }}
        />

        <InputFormText
          type="text"
          name="body"
          label="Post Content"
          control={control}
          rules={{ required: 'Post Content is required' }}
          multiline={true}
        />
        <InputFormText
          type="hidden"
          name="userId"
          label="User Id"
          control={control}
          rules={{ required: 'User Id is required' }}
        />
        <Button type="submit" variant="contained" disabled={!canSave}>
          Save Post
        </Button>
      </StyledForm>
    </Container>
  );
}
