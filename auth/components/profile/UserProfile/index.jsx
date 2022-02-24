import ProfileForm from '../ProfileForm/index';
import { Container, Title } from './style';

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <Container>
      <Title>Your User Profile</Title>
      <ProfileForm />
    </Container>
  );
}

export default UserProfile;
