import styled from 'styled-components';
import { View, SafeAreaView, StatusBar } from 'react-native';

import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ReastaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <ReastaurantListContainer>
        <RestaurantInfoCard />
      </ReastaurantListContainer>
    </SafeArea>
  );
};
