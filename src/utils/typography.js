import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    a: {
      color: '#7f7aee',
    },
    'a:hover': {
      color: '#b8b5f3',
    },
    hr: {
      background: '#f8f8fe',
    },
    h1: {
      color: '#fff',
    },
    h2: {
      color: '#fff',
    },
    h3: {
      color: '#fff',
    },
    body: {
      background: '#383c43',
    },
    '*': {
      color: '#b9babd',
      transition: 'all 0.3s linear',
    },
    blockquote: {
      borderColor: '#b8b5f3',
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
