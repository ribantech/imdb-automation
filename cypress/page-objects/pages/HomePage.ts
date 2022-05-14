import RightSidebar from '../components/home/RightSideBar';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header'
import Menu from '../components/home/Menu';
import MovieTable from '../components/home/MovieTable';
import Movies from '../components/home/MovieTable';
import Title from '../components/home/Title';

class HomePage {
    header: Header = null;
    title: Title = null;
    footer: Footer = null;
    movies: Movies = null;
    rightSidebar: RightSidebar = null;
    movieTable: MovieTable = null;

    constructor() {
        this.header = new Header();
        this.title = new Title();
        this.footer = new Footer();
        this.movies = new Movies();
        this.rightSidebar = new RightSidebar();
    }

    visit() {
        cy.visit('/');
    }

    getHeader() {
        return this.header;
    }

    getPageTitle() {
        return this.title;
    }

    getFooter() {
        return this.footer;
    }

    getMovies() {
        return this.movies;
    }

    getRightSidebar() {
        return this.rightSidebar;
    }
}

export default HomePage;