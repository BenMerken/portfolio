import EmailSVG from '@/components/resume/data/svg-components/email';
import GitHubSVG from '@/components/resume/data/svg-components/github';
import LinkedinSVG from '@/components/resume/data/svg-components/linkedin';

import './styles.scss';

type Social = {
  name: string;
  url: string;
  icon: React.ReactNode;
};
function Footer() {
  const socials: Social[] = [
    {
      name: 'GitHub',
      url: 'https://www.github.com/benmerken',
      icon: <GitHubSVG />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/benmerken',
      icon: <LinkedinSVG />
    },
    {
      name: 'Email',
      url: 'mailto:ben.merken@gmail.com',
      icon: <EmailSVG />
    }
  ];
  return (
    <footer className="footer">
      <small>
        developed with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        by Ben Merken.
      </small>
      <ul className="socials">
        {socials.map((social) => (
          <li>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
