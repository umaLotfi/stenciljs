
import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "article-edit",
  styleUrl: '../global/my-style.css',
  shadow: true
})

export class articleEdit {
    
  @Prop() match: MatchResults;
  @State() article: any;

  Title: HTMLInputElement;
  Author: HTMLInputElement;
  Article: HTMLInputElement;

  componentWillLoad() 
  {
    let id = this.match.params.id;

    console.log(this.match.params);
    return fetch(
      "https://polymer-101-workshop.cleverapps.io/api/blogpost/" + id
    )
      .then(response => response.json())
      .then(data => {
        this.article = data;
        console.log(id);
      });
  }

  ArticlePost() 
  {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
        method: 'PUT',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },

        body: JSON.stringify({ 
          _id: this.article._id,
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

    handleSubmit = (e: Event) => {
        e.preventDefault();
        this.ArticlePost();
        this.Author.value="";
        this.Title.value="";
        this.Article.value="";
      }

  render() {
    return (
      <div id="right-bloc">
               
               <form onSubmit={this.handleSubmit}>

                <div>
                    <label class="label">Title: </label>
                    <input type="text" placeholder="Article title" ref={(el: HTMLInputElement) => this.Title = el} required value={this.article.title}/>
                </div>
                <div>   
                    <label class="label">Article: </label>
                      <input type="text" placeholder="Article" ref={(e2: HTMLInputElement) => this.Article = e2} required value={this.article.article} />
                  </div>
                  <div>
                    <label class="label">Author: </label>
                      <input type="text" placeholder="Article Author" ref={(e3: HTMLInputElement) => this.Author = e3} required value={this.article.autor}/>
                  </div>
                  <button>Edit</button>

                    <stencil-route-link url='/'>
                    <button>Cancel</button>
                    </stencil-route-link>

        </form>
            


            </div>
     
    );
  }
}