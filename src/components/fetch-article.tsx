import { Component,State} from '@stencil/core';

@Component({
  tag: 'fetch-article',
  styleUrl: '../global/my-style.css',
  shadow: true

})

export class FetchArticle {

 
  @State() data :any ;
 
  
    componentWillLoad()
     {
      return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/")
        .then(response => response.json())
        .then(AllArt => {
          this.data = AllArt;
          console.log(this.data);
        });
    }

    
  
  

  trim(str: string) {
    if(str===null){
      return "empty field"
    } else {
      let r = Math.min(141, str.length);
      let point = str.length <= 140 ? "" : "...";
      return str.substring(0, r) + point;
    }

  }

  render() {
    if(this.data && this.data.length>0) {

      return (
        
        <div id="right-bloc">
        { 
            this.data.map((data) =>
            <div>
            <h3>Title : {data.title}</h3>

            <p>Article : {this.trim(data.article)}</p>
            
            <h6>Author : {data.autor}</h6>

            <p>Date : {data.creationDate}</p>

            <stencil-route-link url={'/details/'+data._id}>
            <button>Details</button>
            </stencil-route-link>
            
            <hr/>
            </div> )
                        } 
                        
        </div>
              )



    }
    else {
   
   return (" couldn't render the data ");
   
    } 
   

    
  }
}