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
      <View style={[styles.row, styles.container]}>
        {/* insert img here */}
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  container: { margin: 10 },
  title: { fontWeight: '600' },
  text: {
    color: colors.gray,
    textTransform: 'capitalize',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ListItem;
