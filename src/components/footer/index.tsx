import EnvelopeSVG from '@/assets/envelope.svg?react';
import GitHubSVG from '@/assets/github.svg?react';
import LinkedInSVG from '@/assets/linkedin.svg?react';

import './styles.scss';

type Social = {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
};
function Footer() {
  const socials: Social[] = [
    {
      name: 'GitHub',
      url: 'https://www.github.com/benmerken',
      icon: <GitHubSVG />,
      label: "Ben Merken's GitHub profile"
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/benmerken',
      icon: <LinkedInSVG />,
      label: "Ben Merken's LinkedIn profile"
    },
    {
      name: 'Email',
      url: 'mailto:ben.merken@gmail.com',
      icon: <EnvelopeSVG />,
      label: 'Email to Ben Merken'
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
      <nav>
        <ul className="socials">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
