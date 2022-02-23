import { useRef, useState } from 'react';
import { Container, Title, Control, Label, Input, Actions, Button, Toogle } from './style';

const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'something went wrong');
  }
};

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailIputRef = useRef();
  const passwordInputRef = useRef();

  function switchAuthModeHandler() {
    event.preventDefault();
    setIsLogin(!isLogin);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailIputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // TODO add validation
    if (isLogin) {
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <form onSubmit={submitHandler}>
        <Control>
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" required ref={emailIputRef} />
        </Control>
        <Control>
          <Label htmlFor="password">Your Password</Label>
          <Input type="password" id="password" required ref={passwordInputRef} />
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
