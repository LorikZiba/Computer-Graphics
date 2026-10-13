import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.set(5, 6, 7)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const pointLight = new THREE.PointLight(0xffffff, 400, 0, 1.6)
const ambientLight = new THREE.AmbientLight(0xffffff, 2.3)
scene.add(pointLight, ambientLight)

const geometry = new THREE.SphereGeometry(2, 32, 24);
const material = new THREE.MeshStandardMaterial({ color: 0x9b610,emissive: 0xe8431c, emissiveIntensity: 0.5 })
const sun = new THREE.Mesh(geometry, material)
scene.add(sun)

const earthOrbit = new THREE.Object3D();
sun.add(earthOrbit)

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0X1E40FF, roughness: 0.9 })
)
earth.position.x = 6
earthOrbit.add(earth)

const MoonOrbit = new THREE.Object3D();
earth.add(MoonOrbit)

const Moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0x44ae53, roughness: 0.9 })
)
Moon.position.x = 1.5
MoonOrbit.add(Moon)


const marsOrbit = new THREE.Object3D();
sun.add(marsOrbit)

const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 21, 44),
    new THREE.MeshStandardMaterial({ color: 0xe63333, roughness: 0.9 })
)
mars.position.x = 9
marsOrbit.add(mars)

const FobosOrbit = new THREE.Object3D();
mars.add(FobosOrbit)

const Fobos = new THREE.Mesh(
    new THREE.SphereGeometry(0.20, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0x44ae53, roughness: 0.9 })
)
Fobos.position.x = 1.5
FobosOrbit.add(Fobos)



const control = new OrbitControls(camera, renderer.domElement);
function animate() {
    requestAnimationFrame(animate)
    control.update()
    earthOrbit.rotation.y += 0.01

    MoonOrbit.rotation.y += 0.04
    earth.rotation.y += 0.05

    marsOrbit.rotation.y += 0.008
    FobosOrbit.rotation.y += 0.03
    mars.rotation.y += 0.05

    sun.rotation.y += 0.005

    renderer.render(scene, camera)
}



animate()