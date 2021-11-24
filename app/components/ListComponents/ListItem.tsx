import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../config/colors';

interface Props {
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation
  ) => React.ReactNode;
  title: string;
}

const ListItem = ({ title, renderRightActions }: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.container]}>
        {/* insert img here */}
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: { fontWeight: '600' },
  text: {
    color: 'white',
    textTransform: 'capitalize',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ListItem;
