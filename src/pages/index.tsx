import Contact from '@/components/contact';
import Footer from '@/components/footer';

import './page.styles.scss';

const HomePage = () => {
  return (
    <>
      <main className="main-content">
        <section className="intro">
          <p className="greeting">
            Hello world,{' '}
            <span>
              <span className="author-name">Ben Merken</span> here!
            </span>
          </p>
          {/* TODO: Idea - add other words to interchange with 'develop' (ex. 'analyze', 'drink coffee', 'play the guitar',...), switching between them with a backspace-and-fill-in cursor effect */}
          <h2>
            I <span className="activity">develop software</span>, so you don't
            have to!
          </h2>
          <p>
            For the past four years, I've been active as a full-stack developer
            with a passion for learning and creating. I have experience with a
            variety of technologies and I am always looking to expand my
            skillset.
          </p>
          <p>
            Currently, I am open for new opportunities in Belgium (preferably,
            in / close to Limburg). If you're in the market for a new developer,{' '}
            <a href="#contact">let me know!</a>
          </p>
          <p>
            Whenever I'm not coding, I prefer playing my guitar, which I've been
            doing for the past 14 years, or spending time with a book or a video
            game. More recently, I've also been picking up the knitting needles
            and crochet hook more and more.
          </p>
        </section>
        <section id="projects">
          <h2>Experiences</h2>
          <small>
            The following is a summary of my professional and recreational
            software development experiences.
          </small>
        </section>
        <section id="contact"></section>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
