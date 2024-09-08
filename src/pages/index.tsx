import { Link } from 'react-router-dom';

import '@/App.css'

const HomePage = () => {
  return (
    <main id="main">
      <h1>Ben Merken</h1>
      <p>🚧 Under construction 👷</p>
      <p>
        Welcome to the personal portfolio of Ben Merken! As you can see, it's
        still quite empty! 😅 Be sure to check back later! 👋
      </p>
      <Link to="resume" target="_blank">
        To resume
      </Link>
    </main>
  );
};

export default HomePage;
