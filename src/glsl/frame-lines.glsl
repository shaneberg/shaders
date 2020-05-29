// https://thebookofshaders.com/07/
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;       // Time in seconds since load
uniform vec2 u_resolution;  // Coordinates being rendered

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.3, 0.1, 0.1);
    vec3 frame = vec3(0.5); // gray

    vec2 bl = step(vec2(0.01),st);
    vec2 tr = step(vec2(0.01),1.0-st);

    vec2 mid = step(vec2(mod(u_time * 0.75, 1.0)), 1.0 - st) + (1.0 - step(vec2(mod(0.5 * u_time * 0.60, 0.8)), 1.0 - st));

    float pct = bl.x * bl.y * tr.x * tr.y * mid.x;
    // mix in the target color if we are within the frame (pct <= 0)
    color = mix(frame, color, pct);

    gl_FragColor = vec4(color,1.0);
}
