export function Video() {
  return (
    <video
      width="1440"
      height="842"
      autoPlay
      preload="auto"
      disablePictureInPicture
      loop
      muted
      className="min-w-dvh min-h-dvh object-cover absolute top-0 left-0 -z-10 mt-14"
    >
      <source src="/videos/office.mp4" type="video/mp4" />
      {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>
  );
}
