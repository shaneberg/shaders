let THREE = require('three');

function component() {

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    let renderer = new THREE.WebGLRenderer();
    let padding = 20;
    renderer.setSize(window.innerWidth - padding, window.innerHeight - padding);
    return renderer.domElement;
}

document.body.appendChild(component());
