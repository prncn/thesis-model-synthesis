import ThreeRender from './three/ThreeRender';

export default function App() {
  return (
    <main className="flex flex-1 flex-row min-h-screen bg-stone-950 text-white">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div>
          <p className="text-7xl pb-4">Model Synthesis</p>
          <p className="text-2xl dm-mono-regular">
            Photogrammetry and Neural Networks
          </p>
        </div>
      </div>
      <div className="bg-red-500 w-1/2">
        <ThreeRender />
      </div>
    </main>
  );
}
