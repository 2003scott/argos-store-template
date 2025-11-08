export const VideoBackground = () => {
  return (
    <div className="container flex h-[800px] w-full items-center justify-center bg-black">
      <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
        <source
          src="https://arenaroja.com/cdn/shop/videos/c/vp/18995fc384ab4531adef638a22e66faa/18995fc384ab4531adef638a22e66faa.HD-1080p-7.2Mbps-60579394.mp4?v=0"
          type="video/mp4"
        />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};
