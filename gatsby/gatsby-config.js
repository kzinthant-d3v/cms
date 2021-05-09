import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://www.pizzakaskar.com',
    description: 'The best pizza shop',
    twitter: '@kaskar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mbm42ta0',
        dataset: 'mydata',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
