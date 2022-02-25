import ProfileForm from '../ProfileForm/index';
import { Container, Title } from './style';

function UserProfile() {
  const changePasswordHandler = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
  };
  return (
    <Container>
      <Title>Your User Profile</Title>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </Container>
  );
}

export default UserProfile;
