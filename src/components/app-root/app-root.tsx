import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: '../../global/my-style.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div id="all">
        <header>
          <h1 class="blog-title">Blog</h1>
          
        </header>
        
        <div id="left-bloc"> 
      <stencil-route-link url='/'>
          <button>
            Home
          </button>
        </stencil-route-link>

        <stencil-route-link url='add'>
          <button>
            New Article
          </button>
        </stencil-route-link>
      </div>
      
      
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/add' component='add-article' />
              <stencil-route url='/show' component='fetch-Article' />
              <stencil-route url='/details/:id' component='article-details' />
              <stencil-route url='/edit/:id' component='article-edit' />
              <stencil-route url='/delete/:id' component='article-delete' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
