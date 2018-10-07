
import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "article-details",
  styleUrl: '../global/my-style.css',
  shadow: true
})

export class articleDetails {
  @Prop() match: MatchResults;
  @State() article: any;

  componentWillLoad() {
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

  render() {
    return (
     
      <div id="right-bloc">
      
                <div >
                  <h1>{this.article.title}</h1>
                </div>
                <div>
                    created by : {this.article.autor} 
                </div>

              <div > 
                    article : 
                    <p>{this.article.article}
                    </p>
              </div>
            
              <form>
                    <div>
                    <stencil-route-link url={'/edit/'+this.article._id}>
                    <button>
                      Edit
                    </button>
                  </stencil-route-link>
                        
                    <stencil-route-link url={'/delete/'+this.article._id}>
                    <button>
                      Delete
                    </button>
                  </stencil-route-link>
                    </div>
                </form>
            </div>
           
    );
  }
}