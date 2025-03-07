export default function App() {
  return (
    <div className="p-4">
      <div>Hello world</div>
      <iframe
        title="Aroma"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src="/templates/aroma/index.html"
        className="w-full h-[500px] border-primary border-2"
      ></iframe>
    </div>
  );
}
