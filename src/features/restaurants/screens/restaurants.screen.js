import styled from 'styled-components';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { spacing } from '../../../utils/sizes';

import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${spacing.md}px;
`;

const ReastaurantListContainer = styled(View)`
  flex: 1;
  padding: ${spacing.md}px;
  background-color: blue;
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
