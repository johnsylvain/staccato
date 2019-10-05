import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import staccatoImage from '../images/staccato.png';

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
  image,
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

  const rootUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://staccato.reviews';

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || `${rootUrl}${staccatoImage}`;

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
          content: metaImage,
        },
        {
          name: 'og:image',
          content: metaImage,
        },
      ].concat(meta)}
    />
  );
};
