import React from "react";
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SocialLinks: React.FC = () => {
  const links: SocialLink[] = [
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-200 hover:text-white transform hover:scale-110 transition-all duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
