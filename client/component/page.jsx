import React from 'react';

const Page = React.createClass({
  getDefaultProps() {
    return {
      name : 'index',
      cached : false
    };
  },
  render() {
    const { name,cached } = this.props;
    const type = cached?'page cached' : 'page';
    return (
      <div data-page={ name } className={ type }>
        <div className="page-content">
           {this.props.children}
        </div>
      </div>
    )
  }
});

export default Page;
