#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time;       // Time in seconds since load
uniform vec2 u_resolution;

float plot(vec2 st, float t){
    return smoothstep(t-0.02, t, st.y) - smoothstep(t, t+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    float y = 0.7 + 0.5 * sin(PI * st.x + u_time);
    vec3 color = vec3(y);
    float t = plot(st, y);
    color = (1.0-t)*color+t*vec3(0.0,1.0,0.0);
    gl_FragColor = vec4(color, 1.0);
}

