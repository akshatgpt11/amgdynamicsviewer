import {
  ViewerApp,
  addBasePlugins, 
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.9.2.mjs";

async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("mcanvas"),
    useGBufferDepth: false,
  });

  // Add all the plugins at once
  await addBasePlugins(viewer);

  // Load a 3d model.
  const model = await viewer.load("https://demo-assets.pixotronics.com/pixo/gltf/earringScene2.glb");

  // Load an environment map (not needed with this model)
  // await viewer.setEnvironmentMap("https://dist.pixotronics.com/webgi/assets/hdr/gem_2.hdr");
  
}

setupViewer();