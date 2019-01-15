class Serie {
    constructor(title, release_date, director, opening_crawl) {
        this.title = title;
        this.release_date = release_date;
        this.director = director;
        this.opening_crawl = opening_crawl;

    }


}
class Series {
    constructor() {
        this.series = [];
    }
    addSerie(serie) {
        this.series.push(serie);
    };
    fetchedData() {
        fetch('https://swapi.co/api/films')
            .then(response => response.json())
            .then(users => {
                users.results.map(ser => {
                    let serie = new Serie(ser.title,
                        ser.release_date,
                        ser.director,
                        ser.opening_crawl);
                    this.addSerie(serie);
                });
                this.render();
            });
    }
    render(series) {
        let card = "";
        this.series.map(serie => {
            card += `<div class="col-lg-4 mb-4">
            <div class="card">          
                <div class="card-body">
                    <h5 class="card-title">${serie.title}</h5>
                    <p class="card-text">${serie.director}</p>
                    <p class="card-text">${serie.release_date}</p>
                    <p class="card-text">${serie.opening_crawl}</p>
                    <a href="https://en.wikipedia.org/wiki/The_Good_Doctor_(TV_series)" class="btn btn-outline-success btn-sm">See more </a>
                    <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                </div>
            </div>
        </div>`;
        })
        document.getElementById("cardsSeries").innerHTML = card;
    }
}
const series = new Series();
series.fetchedData();