import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined };

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image?: string;
};

export const SEO: React.FC<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image
        },
        {
          name: 'og:image',
          content: image
        }
      ].concat(meta)}
    />
  );
};
