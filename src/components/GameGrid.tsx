import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletion from "./GameCardSkeletion";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

// selectedGenre: Genre | null;
// selectedPlatform: Platform | null;

//const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
//const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    //  <>
    //    {error && <Text>{error}</Text>}
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        Skeleton.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeletion />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
    //    </>
  );
};

export default GameGrid;
