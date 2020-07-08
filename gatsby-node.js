const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/post-template.js')

  const result = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors)
    reporter.panic(
      `Error loading posts`,
      JSON.stringify(result.errors)
    )

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: postTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
