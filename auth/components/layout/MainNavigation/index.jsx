import { Header, Container, List, Logo, Button } from './style';
import Link from 'next/link';

function MainNavigation() {
  return (
    <Header>
      <Link href="/">
        <a>
          <Logo>Next Auth</Logo>
        </a>
      </Link>
      <nav>
        <Container>
          <List>
            <Link href="/auth">Login</Link>
          </List>
          <List>
            <Link href="/profile">Profile</Link>
          </List>
          <List>
            <Button>Logout</Button>
          </List>
        </Container>
      </nav>
    </Header>
  );
}
export default MainNavigation;
