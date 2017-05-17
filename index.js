'use strict'

class InCallManager {
  start(setup) {}

  stop(setup) {}

  turnScreenOff() {}

  turnScreenOn() {}

  setFlashOn(enable, brightness) {}

  setKeepScreenOn(enable) {}

  setSpeakerphoneOn(enable) {}

  setForceSpeakerphoneOn(_flag) {}

  setMicrophoneMute(enable) {}

  startRingtone(
    ringtone,
    vibrate_pattern,
    ios_category,
    seconds
  ) {}

  stopRingtone() {}

  stopRingback() {}

  async checkRecordPermission() {}

  async requestRecordPermission() {}

  async checkCameraPermission() {}

  async requestCameraPermission() {}

  pokeScreen(_timeout) {}

  async getAudioUri(audioType, fileType) {}
}

export default new InCallManager()
