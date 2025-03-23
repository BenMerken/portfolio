import Footer from '@/components/footer';

import './page.styles.scss';

const HomePage = () => {
  return (
    <>
      <main className="main-content">
        <section className="hero">
          Hello world!
          <h1>Ben Merken</h1>
          here!
          {/* TODO: Idea - add other words to interchange with 'develop' (ex. 'analyze', 'drink coffee', 'play the guitar',...), switching between them with a backspace-and-fill-in cursor effect */}
          <h2>
            I <span className="activity">develop</span>, so you don't have to!
          </h2>
          <p>
            For the past four years, I've been active as a full-stack developer
            with a passion for learning and creating. I have experience with a
            variety of technologies and I am always looking to expand my
            skillset.
          </p>
          <p>
            Currently, I am open for new opportunities in Belgium! If you're
            interested, <a href="mailto:ben.merken@gmail.com">let me know!</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
