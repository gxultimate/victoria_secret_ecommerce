import React from 'react'
import {Container, Grid, Header, List, Segment} from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/parmsang" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a
    href="https://www.facebook.com/Victorias-Secret-Perfumes-Iloilo-City-110091831128511"
    alt="facebook link"
  >
    Facebook
  </a>
)
const emailLink = (
  <a href="aprilcasiple0420@gmail.com" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={7}>
            <Header as="h3">Victoria Secret's Perfume Iloilo City</Header>
            <p>Sell's Authentic Victoria Secret Perfume</p>
            <List
              horizontal
              style={{display: 'flex', justifyContent: 'center'}}
            >
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
