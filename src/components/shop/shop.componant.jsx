import React, { Component } from 'react'
import CollectionPerview from '../collection-preview/collection-perview.compontant';
import SHOP_DATA from './shop.data'

export class Shop extends Component {
    constructor(props){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (<div className='shop-page'>
            {
            collections.map(({id,...otherProps})=> (
                <CollectionPerview key={id} {...otherProps}/>
            ))
            }
        </div>)
    }
}

export default Shop;
