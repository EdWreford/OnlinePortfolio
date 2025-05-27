import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

let scrollOffset = 0;
let targetCameraZ = 5;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = targetCameraZ;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const particleCount = 5000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Load texture for particles
const loader = new THREE.TextureLoader();
const particleTexture = loader.load('public/images/star.png');

const material = new THREE.PointsMaterial({
    size: 0.075,
    map: particleTexture,
    transparent: true,
    alphaTest: 0.01,
    color: 0xffffff,
    depthWrite: false
});

const points = new THREE.Points(particles, material);
scene.add(points);

// Track scroll
window.addEventListener('scroll', () => {
  scrollOffset = window.scrollY;
  targetCameraZ = 5 + scrollOffset * 0.001;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});