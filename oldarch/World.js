import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={{fontSize: 54}}>
        With the old React Native architecture, this text shows correctly below
        the navigation bar every time you see it. If you go back and press the
        button again then the text is correctly inset below the navigation bar.
      </Text>
    </ScrollView>
  </>
);

export default World;
