import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// TODO 1 — Camera
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(0, 1, 5);

// TODO 2 — Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// TODO 3 — Cube (Mesh)
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({ color: 0xE8431C });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// TODO 4 — Lights
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 2);
directional.position.set(3, 5, 4);
scene.add(directional);

// TODO 6 — OrbitControls (optional)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// TODO 5 — Render loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Keep the scene correct when the window is resized
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});