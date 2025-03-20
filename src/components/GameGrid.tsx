import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletion from "./GameCardSkeletion";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          Skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeletion key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
