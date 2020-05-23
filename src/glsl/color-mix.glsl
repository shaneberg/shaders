#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;       // Time in seconds since load
uniform vec2 u_resolution;  // Coordinates being rendered

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 shadeColor = vec3(0.2, 0.2, 0.7);
    vec3 pctHorizontal = vec3(st.x);

    vec3 color = vec3(cos(u_time), sin(u_time * 0.5), cos(u_time * 2.0));
    vec3 shaded = mix(color, shadeColor, pctHorizontal);

    gl_FragColor = vec4(shaded.rgb, 1.0);
}
