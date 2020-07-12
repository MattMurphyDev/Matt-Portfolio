// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matt Murphy',
  siteUrl: 'https://www.mattmurphydev.com',
  siteDescription: 'Thoughts and projects of Matt Murphy',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,

        typeName: 'Post'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        resolveAbsolutePaths: true,
        typeName: 'Project'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs']
    }
  }
}
