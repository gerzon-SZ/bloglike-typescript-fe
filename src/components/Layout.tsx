import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 0;
`;
const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          margin: 0,
        }}
      >
        <ResponsiveAppBar />

        <Container sx={{ minHeight: '100vh', minWidth: '100%', margin: '0' }}>
          <StyledMain className="App">
            <Outlet />
          </StyledMain>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
