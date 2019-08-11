let THREE = require('three');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();

let vertexShader = require('./glsl/basic-vertex.glsl');
let fragmentShader = require('./glsl/algorithmic-drawing.glsl');

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
    u_resolution: {type: 'vec2', value: new THREE.Vector2()}
};

uniforms.u_resolution.value.x = renderer.domElement.width * 0.7;
uniforms.u_resolution.value.y = renderer.domElement.height * 0.7;

let geometry = new THREE.PlaneGeometry();
let material =  new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader,
    fragmentShader,
});

let plane = new THREE.Mesh( geometry, material );
scene.add( plane );

camera.position.z = 0.7;

function animate() {
    uniforms.u_time.value += 0.05;

    camera.position.z +=  0.001;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();
