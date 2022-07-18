
import { useState, useEffect } from 'react';
import "./feed.css";
const Feed =   (props) => {  

const [games , setGames] = useState([]);
const [isLoading , setIsLoading] = useState(false);

const getGames = async () => {

try {
    const fetchedGames = await fetch('http://stage.whgstage.com/front-end-test/games.php');
    const games = await fetchedGames.json();
    setIsLoading(true)
    setGames(games.slice(0,50));
    
} catch (error) {
    console.log(error);
}
    

}
useEffect(() => {
    getGames();
}, []);

  return ( <section id="feed">

     <div className="container">

        {
            isLoading ===false ?'Loading':""
        }
        {
            isLoading && games.length < 1 ?'No Games':""
        }

<div  className='games-container'>
          {games.map(game=>{
            return <div className="game" key={game.id}>
                <div className="game-image">
                    <img src={game.image} alt={game.name} />
                </div>
                <div className="game-info">
                    <h2>{game.name}</h2>
                </div>
            </div>
      })}
</div>
     </div>
  </section>)
}


export default Feed;