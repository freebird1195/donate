import React, { PureComponent } from 'react';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';

export default class extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}
