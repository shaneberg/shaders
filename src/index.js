let THREE = require('three');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();

let shader = require('./glsl/test1.glsl');

function component() {


    let padding = 10;
    renderer.setSize(window.innerWidth - padding, window.innerHeight - padding);
    return renderer.domElement;
}
document.body.appendChild(component());
let uniforms = {
    colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)},
    colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)},
    u_time: {type: 'f', value: 0.0},
};

let fragmentShader = () => {
    return shader;
};

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material =  new THREE.ShaderMaterial({uniforms: uniforms, fragmentShader: fragmentShader() });
let cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 1.3;

function animate() {
    cube.rotation.y += 0.002;
    uniforms.u_time.value += 0.01;

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();
