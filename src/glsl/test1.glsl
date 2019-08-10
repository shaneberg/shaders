#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;       // Time in seconds since load

uniform vec2 u_resolution;

uniform vec3 colorA;
uniform vec3 colorB;

void main() {
    gl_FragColor = vec4(colorA * mod(u_time, 1.0), 1.0);
}

