import React from 'react';
import Form from '../component/form';
import OForm from '../component/oform';

const More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div className="page">
          <div className="page-content">
            <h1>More</h1>
            <p><a href="/">Back home</a></p>
            <Form/>

            <OForm/>
          </div>
        </div>
      </div>
    )
  }
});

export default More;
