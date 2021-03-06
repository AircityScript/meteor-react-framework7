import React from 'react';
import ReactDOM from 'react-dom';

import {mount,withOptions} from 'react-mounter';
const mounter = withOptions({
    rootId: 'react-root'
}, mount);

import MainLayout from '../layout/mainLayout';
import NoMatch from '../layout/noMatch';

import Home from '../template/home';
import Page from '../template/page';
import More from '../template/more';

import List from '../template/list';

FlowRouter.route('/',{
  action(){
    mounter(MainLayout, {
      content: () => (<List />)
    });
  }
});

FlowRouter.route('/home',{
  action(){
    mounter(MainLayout,{
      content: () =>(<Home/>)
    });
  }
})

FlowRouter.route('/page',{
  action(){
    mounter(MainLayout, {
      content: () => (<Page />)
    });
  }
});

FlowRouter.route('/more',{
  action(){
    mounter(MainLayout, {
      content: () => (<More />)
    });
  }
});

FlowRouter.route('/layout',{
  action(){
    mounter(MainLayout);
  }
})

FlowRouter.notFound = {
  name: '404 Not Found',
  action(){
    mount(NoMatch);
  }
};

FlowRouter.initialize();
