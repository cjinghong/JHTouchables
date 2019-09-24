// Prevents multiple taps on touchable opacity
export default class ButtonThrottleController {
  static sharedInstance = null;

  THROTTLE_SECONDS = 0.2;

  canTap = true;

  static getInstance() {
    if (ButtonThrottleController.sharedInstance == null) {
      ButtonThrottleController.sharedInstance = new ButtonThrottleController();
    }
    return this.sharedInstance;
  }

  // On tap trigger function with timeout
  didTapButton = () => {
    // If tapping disabled, just return.
    if (!this.canTap) {
      return;
    }
    this.canTap = false;
    setTimeout(() => {
      this.canTap = true;
    }, this.THROTTLE_SECONDS * 1000);
  };

  // Getter prevents changing canTap variable directly
  canTapButton = () => this.canTap;
}
