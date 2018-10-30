import React from 'react';
import { connect } from 'react-redux';
import { SellForm, ProductTableWithPagination, Counter } from '../../common/components';
import Axios from 'axios';

class SellContainer extends React.Component {
  state = {
    products: [],
  };
  _searchProducts = () => {
    Axios({
      // baseURL: 'http://localhost:5000',
      url: 'http://localhost:5000/products',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ products: res.data });
        } else {
          throw 'unexpected exception';
        }
      })
      .catch(err => {
        // alert(JSON.stringify(err));
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        SellContainer
        <SellForm searchProducts={this._searchProducts} />
        <ProductTableWithPagination products={this.state.products} />
      </div>
    );
  }
}

export default SellContainer;