import "./HeaderArticle.css"

const HeaderArticle = (number) => {
    return (  
        <div className="articleDiv">
            <h3>{number.value}</h3>
            <p className="articleP">Cups of Coffee</p>
        </div>
    );
}
 
export default HeaderArticle;