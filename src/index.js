import GlslCanvas from 'glslCanvas';
import test from './glsl/test.glsl';
import sine from './glsl/sine.glsl';
import colormix from './glsl/color-mix.glsl';

let shaderList = [
    { name: 'Color Mix', program: colormix },
    { name: 'Dev Pink',  program: test },
    { name: 'Sine Wave', program: sine }
];

let curShaderIndex = 0;

let frameSize = 24;
let canvas = document.getElementById('glsl-canvas');
canvas.width = window.innerWidth - frameSize;
canvas.height = window.innerHeight - frameSize;
let sandbox = new GlslCanvas(canvas);
sandbox.load(shaderList[0].program);

document.addEventListener('click', () => {
    curShaderIndex = (curShaderIndex + 1) % shaderList.length;
    sandbox.load(shaderList[curShaderIndex].program);
});
