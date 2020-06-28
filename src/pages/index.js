import React from 'react'

import Welcome from '../components/welcome'

const Index = () => (
  <>
    <hidden id='top'/>

    <Welcome />

    {/* TODO: delete */}
    <div className="vh-100"></div>
    <h3 id="option">I‘m an option</h3>
  </>
);

export default Index;
