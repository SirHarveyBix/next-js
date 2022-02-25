import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import AuthForm from '/components/AuthForm/index';

function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) router.replace('/');
      else setIsLoading(false);
    });
  }, [router]);

  if (isLoading) return <p>Loading ...</p>;

  return <AuthForm />;
}

export default AuthPage;
