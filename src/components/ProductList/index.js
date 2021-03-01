/* eslint-disable camelcase */
import {Link} from 'gatsby'
import React, {useState} from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import ProductImg from './ProductImage'

const mapProductsToItems = products =>
  products
    ? products.map(({name, img, description, price}, index) => {
        let [indexes, setIndex] = useState([])
        let checkHeart = (ind,index) => {
          console.log(ind , index ,"indes")
          if (indexes.length !== 0) {
            setIndex([])
          } else {
            setIndex([index])
          }
          
        }
        return {
          as: Link,
          
          image: (
            <Image fluid floated size="medium">
              <ProductImg filename={img} alt={name} />
            </Image>
          ),
          header: (
            <div>
              {name}
              <Icon
                name="heart"
                style={{
                  float: 'right',
                  color: indexes.includes(index) ? 'red' : 'grey',
                  fontSize: '32px',
                }}
                onClick={() => {
                  checkHeart(indexes,index)
                }}
              ></Icon>
            </div>
          ),
          meta: <Card.Meta style={{color: 'dimgray'}}>{price} </Card.Meta>,
        }
      })
    : ''

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
