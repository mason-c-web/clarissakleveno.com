export function Section2() {
  return (
    <>
      <p className="py-4">This is my cool image gallery!</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {/* using an array to build out an example grid with one image. Remove if you would like 
         different images. */}
        {Array.from({ length: 9 }, (_, i) => (
          <img
            alt={
              "an orange on an orange background with purple star next to it"
            }
            src={"./images/image2.png"}
            className={"rounded-lg shadow-2xl"}
          />
        ))}
      </div>
    </>
  );
}
