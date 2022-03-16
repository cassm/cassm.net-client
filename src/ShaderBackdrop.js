import { Surface } from "gl-react-dom"; // for React DOM
import {Shaders, Node, GLSL} from 'gl-react';

const shaders = Shaders.create({
  jupiter: {
    frag: GLSL`
      precision mediump float;
      varying vec2 uv;
      void main () {
        gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
      }`
  }
});

const ShaderBackdrop = (props) => {
  return (
    <Surface width='100%' height='100%'>
       <Node shader={shaders.jupiter} uniforms={{}} />;
    </Surface>
  );
}

export default ShaderBackdrop;