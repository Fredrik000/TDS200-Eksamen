import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../config/colors';

interface Props {
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation
  ) => React.ReactNode;
  title: string;
  subtitle: string;
  imageUri?: string;
}

const ListItem = ({ title, subtitle, imageUri, renderRightActions }: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.container]}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={[styles.text]}>{subtitle}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: { fontWeight: '600', marginBottom: 5 },
  text: {
    color: 'white',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default ListItem;
