import './ShopItem.css'

const ShopItem = (probs) => {

    return (  
        <article>
            <img src={probs.article.img} alt="article" />
            <h2>{probs.article.name}</h2>
            <p>{probs.article.price}</p>
            <a href="#">BUY NOW</a>
        </article>
    );
}
 
export default ShopItem;