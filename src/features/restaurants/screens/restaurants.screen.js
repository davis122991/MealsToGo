import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { spacing } from '../../../utils/sizes';

import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar style={{ borderRadius: 10 }} placeholder='Search' />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.md,
  },
  list: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: 'blue',
  },
});
