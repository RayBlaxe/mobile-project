import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ state, descriptors, navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabStyle = isFocused ? styles.tabSelected : styles.tab;

        return (
          <TouchableOpacity
            key={index}
            style={tabStyle}
            onPress={() => {
              setSelectedTab(index);
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
          >
            <Text style={styles.tabText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabSelected: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'darkgreen',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TabBar;