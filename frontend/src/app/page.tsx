import { Header } from 'components';
import React from 'react';

export default function Page() {
  return (
    <div>
      <Header/>
      <h2>Hi!</h2>
      Hello world!
      <button className='btn-primary'>press me</button>
    </div>
  );
}
