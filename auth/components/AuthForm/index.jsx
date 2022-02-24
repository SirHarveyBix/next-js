import { useRef, useState } from 'react';
import { Container, Title, Control, Label, Input, Actions, Button, Toogle } from './style';
import { signIn } from 'next-auth/react';

const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'something went wrong');
};

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailIputRef = useRef();
  const passwordInputRef = useRef();

  function switchAuthModeHandler(event) {
    event.preventDefault();
    setIsLogin(!isLogin);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    // TODO add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: emailIputRef.current.value,
        password: passwordInputRef.current.value,
      });
    } else {
      try {
        const result = await createUser(emailIputRef.current.value, passwordInputRef.current.value);
      } catch (error) {
        console.error('error', error);
      }
    }
  };

  return (
    <Container>
      <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <form onSubmit={submitHandler}>
        <Control>
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" ref={emailIputRef} required />
        </Control>
        <Control>
          <Label htmlFor="password">Your Password</Label>
          <Input type="password" id="password" ref={passwordInputRef} required />
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
