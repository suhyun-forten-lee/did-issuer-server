import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/did-issuer-server/blog',
    component: ComponentCreator('/did-issuer-server/blog', 'b9d'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/archive',
    component: ComponentCreator('/did-issuer-server/blog/archive', '9ac'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/authors',
    component: ComponentCreator('/did-issuer-server/blog/authors', 'c29'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/did-issuer-server/blog/authors/all-sebastien-lorber-articles', '984'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/authors/yangshun',
    component: ComponentCreator('/did-issuer-server/blog/authors/yangshun', '18d'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/first-blog-post',
    component: ComponentCreator('/did-issuer-server/blog/first-blog-post', 'fa9'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/long-blog-post',
    component: ComponentCreator('/did-issuer-server/blog/long-blog-post', '51e'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/mdx-blog-post',
    component: ComponentCreator('/did-issuer-server/blog/mdx-blog-post', 'f93'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/tags',
    component: ComponentCreator('/did-issuer-server/blog/tags', '584'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/tags/docusaurus',
    component: ComponentCreator('/did-issuer-server/blog/tags/docusaurus', '3f8'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/tags/facebook',
    component: ComponentCreator('/did-issuer-server/blog/tags/facebook', 'eb7'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/tags/hello',
    component: ComponentCreator('/did-issuer-server/blog/tags/hello', '176'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/tags/hola',
    component: ComponentCreator('/did-issuer-server/blog/tags/hola', '239'),
    exact: true
  },
  {
    path: '/did-issuer-server/blog/welcome',
    component: ComponentCreator('/did-issuer-server/blog/welcome', '6ce'),
    exact: true
  },
  {
    path: '/did-issuer-server/markdown-page',
    component: ComponentCreator('/did-issuer-server/markdown-page', 'ca0'),
    exact: true
  },
  {
    path: '/did-issuer-server/docs',
    component: ComponentCreator('/did-issuer-server/docs', '972'),
    routes: [
      {
        path: '/did-issuer-server/docs/next',
        component: ComponentCreator('/did-issuer-server/docs/next', 'df9'),
        routes: [
          {
            path: '/did-issuer-server/docs/next',
            component: ComponentCreator('/did-issuer-server/docs/next', '575'),
            routes: [
              {
                path: '/did-issuer-server/docs/next/did-issuer-server/api/Issuer_API_ko',
                component: ComponentCreator('/did-issuer-server/docs/next/did-issuer-server/api/Issuer_API_ko', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/next/did-issuer-server/db/OpenDID_TableDefinition_Issuer',
                component: ComponentCreator('/did-issuer-server/docs/next/did-issuer-server/db/OpenDID_TableDefinition_Issuer', '1d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/next/did-issuer-server/errorCode/Issuer_ErrorCode',
                component: ComponentCreator('/did-issuer-server/docs/next/did-issuer-server/errorCode/Issuer_ErrorCode', '91d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/next/did-issuer-server/installation/OpenDID_IssuerServer_InstallationAndOperation_Guide_ko',
                component: ComponentCreator('/did-issuer-server/docs/next/did-issuer-server/installation/OpenDID_IssuerServer_InstallationAndOperation_Guide_ko', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/did-issuer-server/docs',
        component: ComponentCreator('/did-issuer-server/docs', '33c'),
        routes: [
          {
            path: '/did-issuer-server/docs',
            component: ComponentCreator('/did-issuer-server/docs', 'bcd'),
            routes: [
              {
                path: '/did-issuer-server/docs/did-issuer-server/api/Issuer_API_ko',
                component: ComponentCreator('/did-issuer-server/docs/did-issuer-server/api/Issuer_API_ko', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/did-issuer-server/db/OpenDID_TableDefinition_Issuer',
                component: ComponentCreator('/did-issuer-server/docs/did-issuer-server/db/OpenDID_TableDefinition_Issuer', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/did-issuer-server/errorCode/Issuer_ErrorCode',
                component: ComponentCreator('/did-issuer-server/docs/did-issuer-server/errorCode/Issuer_ErrorCode', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/did-issuer-server/docs/did-issuer-server/installation/OpenDID_IssuerServer_InstallationAndOperation_Guide_ko',
                component: ComponentCreator('/did-issuer-server/docs/did-issuer-server/installation/OpenDID_IssuerServer_InstallationAndOperation_Guide_ko', '94a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/did-issuer-server/',
    component: ComponentCreator('/did-issuer-server/', '2a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];