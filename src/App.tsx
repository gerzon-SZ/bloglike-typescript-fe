import { Routes, Route, Navigate } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import Layout from './components/Layout';
import { useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { useAppDispatch, useAppSelector } from './app/hooks';
// import {
//   decrement,
//   increment,
//   ammountAdded,
// } from './features/counter/counterSlice';
import { useGetPostsQuery } from './features/posts/postsSlice';
import './App.css';

function App() {
  const { data: posts, isLoading, isSuccess, isError } = useGetPostsQuery();
  useEffect(() => {
    if (posts) {
      console.log(posts, 'posts');
    }
  }, [posts]);
  // if (isLoading) {
  //   return <p>"Loading..."</p>;
  // }
  // if (isSuccess) {
  //   console.log(posts, 'posts');
  // }
  // useEffect(() => {
  //   if (posts) {
  //     console.log(posts, 'posts');
  //   }
  // }, [posts]);
  // const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signinside" element={<SignInSide />} /> */}
          <Route index element={<PostsList />} />

          {/* <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route> */}

          {/* <Route path="user">
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<UserPage />} />
          </Route> */}

          {/* Catch all - replace with 404 component if you want */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
