export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff9bf05fce2f33276e93762',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ba1od9x1',
                  apiId: 'cfd6640a-4a2b-477b-a587-81a51f9960dd'
                },
                {
                  buildHookId: '5ff9bf0520fc873bd281ca69',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yszjd712',
                  apiId: '1cc8c91c-43f4-4f3a-b34d-da5c44df4946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ali-yasin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yszjd712.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
