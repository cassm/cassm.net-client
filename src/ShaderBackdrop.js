import './ShaderBackdrop.css';
import {Surface} from "gl-react-dom"; // for React DOM
import {Shaders, Node, GLSL} from 'gl-react';
import {useState} from "react";
import useInterval from 'use-interval'

const shaders = Shaders.create({
  jupiter: {
    frag: GLSL`
      precision highp float;
      const int n_colours = 8;
      const float band_width = 1.0/float(n_colours);
      const float sineFactor = 0.001;
      uniform float colours[n_colours*3];
      uniform float u_time;

      //perlin noise algo per Patricio Gonzalez Vivo's implementation
      float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

      float noise(vec3 p){
          vec3 a = floor(p);
          vec3 d = p - a;
          d = d * d * (3.0 - 2.0 * d);

          vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
          vec4 k1 = perm(b.xyxy);
          vec4 k2 = perm(k1.xyxy + b.zzww);

          vec4 c = k2 + a.zzzz;
          vec4 k3 = perm(c);
          vec4 k4 = perm(c + 1.0);

          vec4 o1 = fract(k3 * (1.0 / 41.0));
          vec4 o2 = fract(k4 * (1.0 / 41.0));

          vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
          vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

          return o4.y * d.y + o4.x * (1.0 - d.y);
      }

      varying vec2 uv;
      void main () {
        // shift bands over time
        float effective_u = uv.y + (u_time/-30.0);

        // add several scales of noise to give gas giant banding effect
        effective_u += noise(vec3(uv.x*8.2, uv.y*8.2, u_time))*0.1 -0.05;
        effective_u += noise(vec3(uv.x*10.0, uv.y*10.0, u_time*0.35))*0.2 -0.1;
        effective_u += noise(vec3(uv.x*14.0, uv.y*14.0, u_time*0.58))*0.09 -0.045;

        effective_u = fract(effective_u);

        int band = int(effective_u / band_width);
        float bandOffset = fract(effective_u / band_width);

        // mix smoothly between bands
        float mixFactor = smoothstep(0.0, 0.3, bandOffset);
        vec3 colourA, colourB;

        // can't dynamically index an array, so we do this.
        if (band == 0) {
          colourA = vec3(colours[0], colours[1], colours[2]);
          colourB = vec3(colours[3], colours[4], colours[5]);
        }
        else if (band == 1) {
          colourA = vec3(colours[3], colours[4], colours[5]);
          colourB = vec3(colours[6], colours[7], colours[8]);
        }
        else if (band == 2) {
          colourA = vec3(colours[6], colours[7], colours[8]);
          colourB = vec3(colours[9], colours[10], colours[11]);
        }
        else if (band == 3) {
          colourA = vec3(colours[9], colours[10], colours[11]);
          colourB = vec3(colours[12], colours[13], colours[14]);
        }
        else if (band == 4) {
          colourA = vec3(colours[12], colours[13], colours[14]);
          colourB = vec3(colours[15], colours[16], colours[17]);
        }
        else if (band == 5) {
          colourA = vec3(colours[15], colours[16], colours[17]);
          colourB = vec3(colours[18], colours[19], colours[20]);
        }
        else if (band == 6) {
          colourA = vec3(colours[18], colours[19], colours[20]);
          colourB = vec3(colours[21], colours[22], colours[23]);
        }
        else if (band == 7) {
          colourA = vec3(colours[21], colours[22], colours[23]);
          colourB = vec3(colours[0], colours[1], colours[2]);
        }

        gl_FragColor = vec4(mix(colourA, colourB, mixFactor)*0.25, 0.125);
      }`
  }
});

const ShaderBackdrop = (props) => {
  // hue rotated high saturation colours at regular intervals
  const [colours] = useState([
    0.92, 0.0, 0.0,
    0.92, 0.69, 0.0,
    0.46, 0.92, 0.0,
    0.0, 0.92, 0.23,
    0.0, 0.92, 0.92,
    0.0, 0.23, 0.92,
    0.46, 0.0, 0.92,
    0.92, 0.0, 0.69
  ]);

  const [u_time, setTime] = useState(performance.now() / 1000);

  useInterval(() => {
    setTime(performance.now() / 1000);
  }, 1000 / 60);

  return (
    <Surface width={window.innerWidth} height={window.innerHeight} className='shader-surface'>
      <Node shader={shaders.jupiter} uniforms={{colours: new Float32Array(colours), u_time}}/>;
    </Surface>
  );
}

export default ShaderBackdrop;