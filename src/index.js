const FramePlayer = require('./Frameplayer').default;

if (typeof window !== "undefined") {
    window.FramePlayer = FramePlayer;
}

export default FramePlayer;
