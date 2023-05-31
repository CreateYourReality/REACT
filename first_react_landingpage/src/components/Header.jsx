import "./Header.css"
import HeaderArticle from "./HeaderArticle";

const Header = () => {
    return (  
        <header>
            <h2>Hello There</h2>
            <h1>We Are Glint</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nihil nostrum inventore temporibus reprehenderit dignissimos sint magnam architecto voluptatibus eaque sit id nulla consequuntur reiciendis sapiente voluptates non itaque soluta, fugit aspernatur! Ratione, deserunt velit veniam nemo sequi doloribus quasi sapiente nostrum earum. Ut iure officia vero, porro dolores odit!</p>
            <article>
                <HeaderArticle></HeaderArticle>
                <HeaderArticle></HeaderArticle>
                <HeaderArticle></HeaderArticle>
                <HeaderArticle></HeaderArticle>
            </article>
        </header>
    );
}
 
export default Header; 