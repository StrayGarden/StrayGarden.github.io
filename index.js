


// 3D JS working on index page
// Currently not working properly 
// 3D.js Package setup improperly?


import './header.css';
import './index.css';

import * as THREE from 'three';

//Three.js setup

// Create a scene
const scene = new THREE.Scene();

// Set camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// setup canvas to screen size
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);





// // Append the renderer's canvas element through DOM manipulation
document.body.appendChild(renderer.domElement);