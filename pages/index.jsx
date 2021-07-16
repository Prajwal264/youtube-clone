import { getSession, signin } from 'next-auth/client';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function HomePage({ session }) {
  /**
   *
   *
   */
  const signinWithGoogle = async () => {
    await signin('google');
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

HomePage.defaultProps = {
  session: {},
};

HomePage.propTypes = {
  session: PropTypes.shape({}),
};

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
