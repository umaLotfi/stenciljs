import { Component } from '@stencil/core';


@Component({
  tag: 'add-article',
  styleUrl: '../global/my-style.css',
  shadow: true
})

export class AppDetails {
 
    Title: HTMLInputElement;
    Author: HTMLInputElement;
    Article: HTMLInputElement;

    handleSubmit = (e: Event) => {
        e.preventDefault();
        this.ArticleAdd();
        this.Author.value="";
        this.Title.value="";
        this.Article.value="";
      }


ArticleAdd() 
  {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },

        body: JSON.stringify({ 
          title:  this.Title.value,
          autor: this.Author.value,
          article: this.Article.value
        }),
      }).then((response) => response.json())
          .then((res) => {
            return res.movies;
          })
          .catch((error) => {
            console.error(error);
          });
    }

    render() {
        return (
            <div id="right-bloc">
                   
                   <form onSubmit={this.handleSubmit}>
    
                    <div>
                        <label class="label">Title: </label>
                        <input type="text" placeholder="Article title" ref={(el: HTMLInputElement) => this.Title = el} required value=""  />
                    </div>
                    <div>   
                        <label class="label">Article: </label>
                          <input type="text" placeholder="Article" ref={(e2: HTMLInputElement) => this.Article = e2} required value="" />
                      </div>
                      <div>
                        <label class="label">Author: </label>
                          <input type="text" placeholder="Article Author" ref={(e3: HTMLInputElement) => this.Author = e3} required value="" />
                      </div>
                      <button>Add</button>
    
                        <stencil-route-link url='/'>
                        <button>Cancel</button>
                        </stencil-route-link>
    
            </form>
                
    
    
                </div>
         
        );
      }
}