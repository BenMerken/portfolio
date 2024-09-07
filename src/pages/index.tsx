import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <h1>Ben Merken</h1>
      <p>Coming soon...</p>

      <Link to="resume" target='_blank'>To resume</Link>
    </main>
  );
};

export default HomePage;
