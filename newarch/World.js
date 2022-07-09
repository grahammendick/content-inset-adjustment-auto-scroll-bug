import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={{fontSize: 54}}>
        The new React Native architecture incorrectly insets recycled scroll
        views. Scroll this text, go back and press the button again then the
        text shows wrongly behind the navigation bar.
      </Text>
    </ScrollView>
  </>
);

export default World;
