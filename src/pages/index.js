import React ,{useState}from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import logo from '../images/logo.png'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            productList {
              name
              img
              description
              price
              
            }
          }
        }
      }
    }
  }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMarkdownRemark.edges')
  const filterProductsWithoutImages = products[0].node.frontmatter.productList
  let [indexes, setIndex] = useState([])
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header>
      <ProductList products={filterProductsWithoutImages} indexes= {indexes}  setIndex={setIndex}/>
    </Layout>
  )
}

export default StoreIndex
