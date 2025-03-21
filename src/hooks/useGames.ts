import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

//const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>

const useGames = ( gameQuery: GameQuery) =>  
  useData<Game>('/games', { 
    params: { 
      genres: gameQuery.genre?.id, //genres: selectedGenre?.id, 
      platforms: gameQuery.platform?.id, //platforms: selectedPlatform?.id
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    [gameQuery]); //[selectedGenre?.id, selectedPlatform?.id]);

export default useGames;