//361920974b06446e816efa524e28759d
console.log("This is my latest news")

//Intitialize the news api parameters
let apiKey = '361920974b06446e816efa524e28759d';``
let source = 'bbc-news';
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`, true);

//what to when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.sources;
        let newsHtml = "";
        //console.log(articles);
        articles.forEach(function (element, index) {
            //console.log(element, index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button id="name" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>News Portal ${index+1}:</b> ${element["name"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });

        newsAccordion.innerHTML = newsHtml;
      
    } else {
        console.log('Some error occured');
    }
}
xhr.send();
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value;
    let note = document.getElementsByClassName('card');
    console.log(note);
    Array.from(note).forEach(function(element,index){
        let name = element.getElementsByTagName("b")[0].innerText;
        console.log(name);
        if(inputVal.includes(name)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
    console.log('Input event fired!', inputVal);
})

