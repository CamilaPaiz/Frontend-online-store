import React, { Component } from 'react';

export default class ListProducts extends Component {
  render() {
    return (
      <section>
        <input
          type="text"
          placeholder=""
          value=""
          // onChange={}
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}