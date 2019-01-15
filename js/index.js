// import { elements } from './base';
// import Serie from './models/Serie'

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

        // .then(users => console.log('users', users.results))
        .then(users => users.results.map(ser => {
            console.log('users.results', users.results)
            let serie = new Serie(ser.title,
                ser.release_date,
                ser.director,
                ser.opening_crawl);
            series.addSerie(serie);
            console.log('series', series)
        }))
    }
    render() {

    }
}
const series = new Series();
series.fetchedData();