#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;       // Time in seconds since load
uniform vec2 u_resolution;  // Coordinates being rendered

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    float adjustedX = st.x + (u_time * 0.15);
    float adjustedY = st.y + (u_time * 0.10);
    // We map x (0.0 - 1.0) to the hue (0.0 - 1.0)
    // And the y (0.0 - 1.0) to the brightness
    vec3 color = hsb2rgb(vec3(adjustedX,1.0,adjustedY));

    gl_FragColor = vec4(color,1.0);
}
