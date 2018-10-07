import { Component, Prop,  State } from '@stencil/core';
import { MatchResults, RouterHistory  } from '@stencil/router';


@Component({
  tag: 'article-delete',
  styleUrl: '../global/my-style.css',
  shadow: true
})
export class AppDeleteArticle {


  @Prop() history : RouterHistory;
  @Prop() match : MatchResults;

  @State() msg = "";

  @State() article  : any ;

  back(){
    this.history.goBack();
}

  componentWillLoad() {
    let id = this.match.params.id;
    console.log('Component is about to be rendered');
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id,{
        method: 'DELETE'
    })
  .then(response => {if (response.ok)
     { 
        alert(' Article has been deleted');
        this.back();
      }
        else{
        alert("Couldn't delete this article");
        this.back();
      }
        });     
    }

 
  render()
   {
    if(this.match && this.match.params.id )
    return;
  }
}