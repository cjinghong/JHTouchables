import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import TouchableController from './TouchableController';

const controller = TouchableController.getInstance();
const { didTapButton, canTapButton } = controller;

class JHTouchableOpacity extends Component {
  render() {
    const { children, onPress, ...others } = this.props;
    return (
      <TouchableOpacity
        {...others}
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

export default JHTouchableOpacity;
