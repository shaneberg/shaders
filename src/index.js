import GlslCanvas from 'glslCanvas';
import testFragShader from './glsl/algorithmic-drawing.glsl';
let frameSize = 24;
let canvas = document.getElementById('glsl-canvas');
canvas.width = window.innerWidth - frameSize;
canvas.height = window.innerHeight - frameSize;
let sandbox = new GlslCanvas(canvas);
sandbox.load(testFragShader);
