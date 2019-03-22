import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Contianer from './Container';

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { twitter, github } = data.site.siteMetadata.social;

        return (
          <footer
            style={{
              marginTop: rhythm(2.5),
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Contianer>
              <a
                style={{ marginRight: '20px' }}
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Contianer>
          </footer>
        );
      }}
    />
  );
}

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Footer;
