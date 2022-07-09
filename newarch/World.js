import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={{fontSize: 54}}>
        With the new React Native architecture, this text only shows correctly
        below the navigation bar the first time you see it. If you go back and
        press the button again then the text shows wrongly behind the navigation
        bar.
      </Text>
    </ScrollView>
  </>
);

export default World;
