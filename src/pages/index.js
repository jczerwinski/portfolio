import './portfolio.css';

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout/'

import Img from 'gatsby-image'

import { Badge } from 'reactstrap'

import { rhythm } from '../utils/typography'

import color from '../utils/stringColor'

class Portfolio extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const items = get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <section style={{textAlign: 'center'}}>
          <section style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h1 style={{marginBottom: '3rem'}}>Portfolio</h1>
            <p>Explore a selection of my publically available work.</p>
          </section>
          <section className="portfolio-items">
            {items.map(i => {
              return (
                <div className="portfolio-item" key={i.node.frontmatter.title}>
                  <h3><a href={i.node.frontmatter.link}>{i.node.frontmatter.title}</a></h3>
                  <div>{i.node.frontmatter.date}</div>
                  <div>
                    {i.node.frontmatter.tags.map(t => <Badge pill style={{marginRight: '.3rem', backgroundColor: color(t)}} key={t}>{t}</Badge>)}
                  </div>
                  <div style={{marginBottom: '1.618rem'}} dangerouslySetInnerHTML={{ __html: i.node.html }} />
                  <div class="image">
                    <a href={i.node.frontmatter.link}><Img fluid={i.node.frontmatter.img.childImageSharp.fluid} /></a>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/portfolio//"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            date (formatString: "MMMM YYYY")
            title
            link
          }
        }
      }
    }
  }
`
