import { Header, Container, List, Logo, Button } from './style';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const logoutHandler = () => {
    signOut();
  };

  return (
    <Header>
      <Link href="/">
        <a>
          <Logo>Next Auth</Logo>
        </a>
      </Link>
      <nav>
        <Container>
          {!session && !loading && (
            <List>
              <Link href="/auth">Login</Link>
            </List>
          )}
          {session && (
            <>
              <List>
                <Link href="/profile">Profile</Link>
              </List>
              <List>
                <Button onClick={logoutHandler}>Logout</Button>
              </List>
            </>
          )}
        </Container>
      </nav>
    </Header>
  );
}
export default MainNavigation;
