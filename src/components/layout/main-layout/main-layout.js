import React from 'react';

import Header from '../header';

const MainLayout = (props) => {

  return (
    <div>
      <Header {...props} />
      {props.children}
    </div>
  )
};

export default MainLayout;
