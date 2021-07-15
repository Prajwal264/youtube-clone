import { signin, useSession } from 'next-auth/client';
import { useEffect } from 'react';

function HomePage() {
  const [session] = useSession();

  /**
   *
   *
   */
  const signinWithGoogle = async () => {
    const res = await signin('google');
    console.log(res);
  };

  useEffect(() => {
    console.log('session', session);
  }, []);

  return (
    <div>
      <p>Welcome to Youtube</p>
      <button
        type="button"
        onClick={signinWithGoogle}
      >
        SigninWithGoogle
      </button>
    </div>
  );
}

export default HomePage;
