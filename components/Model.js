import "@google/model-viewer";

const Model = () => (
  <div id="card">
    <model-viewer
      src="/PahlajKunjElevation.glb"
      skybox-image="/fouriesburg_mountain_midday_1k.hdr"
      alt="model"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default Model;
