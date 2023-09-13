import { apiSlice } from '../api/apiSlice';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}
type UsersResponse = User[];

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => 'users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
    addUser: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    updateUser: build.mutation<void, Pick<User, 'id'> & Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userSlice.util.updateQueryData('getUser', id, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userSlice;
