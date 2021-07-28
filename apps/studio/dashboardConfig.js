export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'helua/sanity-angular-website'
      }
    },
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
                  buildHookId: '61012e39897fc2c00df7f024',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-jmb4qw8x',
                  apiId: 'df9265a4-e724-463b-86ff-64d647c8ed70'
                },
                {
                  buildHookId: '61012e3963038dc4cf80e5d9',
                  title: 'Website',
                  name: 'sanity-angular-website-web-k168aif8',
                  apiId: '15cd85d0-f1d8-4b7a-9f4f-e26fe294771d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helua/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-k168aif8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
