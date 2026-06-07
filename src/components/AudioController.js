class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ambientOsc = null;
    this.ambientGain = null;
    this.muted = false;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    this.ctx = new AudioContextClass();
  }

  setMute(isMuted) {
    this.muted = isMuted;
    if (this.ctx) {
      if (this.muted) {
        if (this.ambientGain) this.ambientGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } else {
        if (this.ambientGain) this.ambientGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      }
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(2500, t);
    osc.frequency.exponentialRampToValueAtTime(3500, t + 0.04);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.setValueAtTime(800, t + 0.01);

    gain.gain.setValueAtTime(0.015, t);
    gain.gain.setValueAtTime(0.0001, t + 0.015);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.02);
  }

  playBoot() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const duration = 1.2;
    
    // Low Drone Rising
    const oscLow = this.ctx.createOscillator();
    const oscHigh = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    oscLow.type = 'sawtooth';
    oscLow.frequency.setValueAtTime(80, t);
    oscLow.frequency.linearRampToValueAtTime(220, t + duration);

    oscHigh.type = 'sine';
    oscHigh.frequency.setValueAtTime(400, t);
    oscHigh.frequency.exponentialRampToValueAtTime(1200, t + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.exponentialRampToValueAtTime(1500, t + duration);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    oscLow.connect(filter);
    oscHigh.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    oscLow.start(t);
    oscHigh.start(t);
    oscLow.stop(t + duration);
    oscHigh.stop(t + duration);
  }

  playAccessGranted() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const notes = [600, 800, 1100, 1600];
    const delay = 0.08;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * delay);

      gain.gain.setValueAtTime(0, t + idx * delay);
      gain.gain.linearRampToValueAtTime(0.05, t + idx * delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * delay + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * delay);
      osc.stop(t + idx * delay + 0.2);
    });
  }

  playError() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.setValueAtTime(220, t + 0.15);

    gain.gain.setValueAtTime(0.1, t);
    gain.gain.setValueAtTime(0.1, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, t);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.35);
  }

  startAmbientHum() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    if (this.ambientOsc) return;

    this.ambientOsc = this.ctx.createOscillator();
    const oscSub = this.ctx.createOscillator();
    this.ambientGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    this.ambientOsc.type = 'sine';
    this.ambientOsc.frequency.setValueAtTime(110, t); // A2 hum

    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(55, t); // Sub A1 hum

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(80, t);

    this.ambientGain.gain.setValueAtTime(this.muted ? 0 : 0.015, t);

    this.ambientOsc.connect(this.ambientGain);
    oscSub.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);

    this.ambientOsc.start(t);
    oscSub.start(t);
  }
}

const audioController = new AudioEngine();
export default audioController;
