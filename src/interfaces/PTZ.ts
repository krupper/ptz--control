interface PTZ {
  ip: string;

  setPanTiltSpeed(pan: number, tilt: number): void;
  setZoomSpeed(speed: number): void;

  setAutoFocus(status: boolean): void;
  setFocusSpeed(speed: number): void;

  setAutoIris(staÍtus: boolean): void;
  stepIris(direction: 'up' | 'down', stepSize: number): void;

  playbackPreset(presetNumber: number): void;
}
