const canvas = document.getElementById('xr-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

fetch("http://localhost:8000/materials")
  .then(response => response.json())
  .then(materials => {
    materials.forEach((mat, i) => {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: mat.color });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = i * 2.5;
      scene.add(cube);
    });
  });

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
