


// 3D JS working on index page
// Currently not working properly 
// 3D.js Package setup improperly?


// import './header.css';
// import './index.css';

import * as THREE from './three/three.js-master/three.js-master/build/three.module.js';


console.log("Three.js version:", THREE.REVISION);
//Three.js setup

// Create a scene
const scene = new THREE.Scene();



//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Set camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;
scene.add(camera);


// setup canvas to screen size
const renderer = new THREE.WebGLRenderer(
{
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(10);

renderer.render(scene, camera);





// // Append the renderer's canvas element through DOM manipulation
document.body.appendChild(renderer.domElement);