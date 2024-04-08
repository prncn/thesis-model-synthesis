import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

export default function ThreeRender() {
  interface Dimensions {
    width: number;
    height: number;
  }

  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientWidth;
      setDimensions({
        width,
        height,
      });
    }
  }, [ref]);

  useEffect(() => {
    const scene: Scene = new Scene();
    const camera: PerspectiveCamera = new PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );

    const renderer: WebGLRenderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(dimensions.width, dimensions.height);
    document.getElementById('__canvas')?.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xa7a6a6 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  }, [dimensions.height, dimensions.width]);

  return <div ref={ref} id="__canvas" />;
}
