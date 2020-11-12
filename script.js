console.log('checking connection');

let accordionExample = document.getElementById('accordionExample');


const xhr = new XMLHttpRequest();

xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e90b622c6e4345d1a6e9b5749dbcacea`, true);


xhr.onload = function () {

    if (this.status === 200) {
        let jsonData = JSON.parse(this.responseText);
        let articals = jsonData.articles;
        
        let html = '';

        for (let i = 0; i < articals.length; i++) {
            html = html + `<div class="card cardBody">
                                <div class="card-header" id="heading${i}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link btn-block text-left collapsed title" type="button" data-toggle="collapse"
                                            data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                                            <b>Breaking News ${i+1}: </b>${articals[i].title}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                                    <div class="card-body contant">
                                    ${articals[i].description}.<a href="${articals[i].url}" target="-blank"> Read more</a>
                                    </div>
                                </div>
                            </div>`
                            // console.log(articals[i].description);
        }
        
        accordionExample.innerHTML = html;
    }
    else {
        console.log('error');
    }
}

xhr.send();

let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input',searchHandler);

function searchHandler()
{
    let searchTxt = searchBox.value;
    // console.log(searchTxt);
    let title = document.getElementsByClassName('title');
    let contant = document.getElementsByClassName('contant');
    let cardBody = document.getElementsByClassName('cardBody');
    // console.log(title);

    for(let i=0; i<title.length;i++)
    {
        if(title[i].innerHTML.includes(searchTxt) || contant[i].innerHTML.includes(searchTxt) )
        {
            cardBody[i].style.display = "block";
        }
        else{
            cardBody[i].style.display = "none";
        }
    }


}

