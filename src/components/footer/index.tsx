import EnvelopeSVG from '@/assets/envelope.svg?react';
import GitHubSVG from '@/assets/github.svg?react';
import LinkedInSVG from '@/assets/linkedin.svg?react';

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
      icon: <LinkedInSVG />
    },
    {
      name: 'Email',
      url: 'mailto:ben.merken@gmail.com',
      icon: <EnvelopeSVG />
    }
  ];
  return (
    <footer className="footer">
      <small>
        developed with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by Ben Merken.
      </small>
      <ul className="socials">
        {socials.map((social) => (
          <li key={social.name}>
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
