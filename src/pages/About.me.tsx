export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold">About me</h1>
        <div className="flex">
          <img src="img/icon.png"></img>
          <p className="flex flex-wrap gap-3">
            {[...new Array(100)].map((_, i) => (
              <p>{i}</p>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
