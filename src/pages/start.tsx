export function Start() {
  return (
    <div className="flex h-svh w-full bg-zinc-500">
      <div className="itens-center flex h-full w-full max-w-[50%] flex-col justify-center bg-zinc-50 ps-20 text-start">
        <p className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">
          Hello
        </p>
        <span className="break-normal bg-clip-text text-8xl font-extrabold text-transparent text-zinc-950">
          I'M <strong className="text-yellow-500">VITHOR</strong>
        </span>
        <p className="mt-5 w-fit bg-yellow-500 px-5 font-bold text-zinc-950 dark:text-zinc-100">
          Back-end developer from Brazil
        </p>
        <p className="w-full max-w-[50%] pt-5 text-sm font-extralight text-zinc-950">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="mt-10">
          <button className="rounded-3xl bg-yellow-400 px-4 py-2 font-bold text-zinc-50">
            Explore more
          </button>
        </div>
      </div>
      <div className="flex h-full w-full items-end justify-center">
        <img src="../../assents/eu3.png" className="h-[130%]" alt="" />
      </div>
    </div>
  );
}
