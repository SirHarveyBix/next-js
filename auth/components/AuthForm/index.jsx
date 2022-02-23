import { useState } from 'react';
import { Container, Title, Control, Label, Input, Actions, Button, Toogle } from './style';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <Container>
      <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <form>
        <Control>
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" required />
        </Control>
        <Control>
          <Label htmlFor="password">Your Password</Label>
          <Input type="password" id="password" required />
        </Control>
        <Actions>
          <Button>{isLogin ? 'Login' : 'Create Account'}</Button>
          <Toogle type="button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Toogle>
        </Actions>
      </form>
    </Container>
  );
}

export default AuthForm;
