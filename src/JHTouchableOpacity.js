import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import TouchableController from './TouchableController';

const controller = TouchableController.getInstance();
const { didTapButton, canTapButton } = controller;

class MSATouchableOpacity extends Component {
  render() {
    const { children, onPress, ...otherProps } = this.props;
    return (
      <TouchableOpacity
        {...otherProps}
        onPress={() => {
          if (canTapButton()) {
            didTapButton();
            onPress();
          }
        }}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default MSATouchableOpacity;
