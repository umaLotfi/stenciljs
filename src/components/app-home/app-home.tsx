import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: '../../global/my-style.css',
  shadow: true
})
export class AppHome 
{

  render() {
    return (
     
      <div > 
      <fetch-article></fetch-article>    
      </div>
    );
  }
}
