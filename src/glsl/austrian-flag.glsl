#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Coordinates being rendered

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 white = vec3(1.0, 1.0, 1.0);

    float pct = step(0.3333, st.y) - step(0.6667, st.y);

    vec3 color = mix(red, white, pct);

    gl_FragColor = vec4(color.rgb, 1.0);
}
