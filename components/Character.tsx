import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('../components/SplineScene'), {
  ssr: false,
  loading: () => <p>Loading 3D scene...</p>
});

const TextToSpeech = dynamic(() => import('../components/TextToSpeech'), {
  ssr: false
});

export default function Home() {
  return (
    <main className='w-full h-screen'>
      <SplineScene />
    </main>
  );
}