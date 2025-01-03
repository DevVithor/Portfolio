import { Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-zinc-50">
      <div className="flex h-full w-full max-w-[1320px] flex-col text-start">
        <div className="flex h-full max-h-[20%] w-full flex-col items-center text-start">
          <h1 className="underline-offset-6 flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold text-zinc-950 underline decoration-yellow-500 decoration-4 underline-offset-8">
            CONTACT
          </h1>
          <p className="h-full w-full max-w-[800px] text-center">
            Id vitae sint a omnis voluptas ut repellat labore eum impedit
            laudantium eos animi illum. Et numquam omnis ab galisum consequatur
            ad sint neque qui nulla sunt in architecto eius eos commodi placeat
            et totam vitae.
          </p>
        </div>
        <div className="mt-5 flex h-full w-full items-center justify-center gap-5">
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Phone size={70} className="text-zinc-300" />
            <p>
              Id vitae sint a omnis voluptas ut repellat labore eum impedit
              laudantium eos animi illum.
            </p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Mail size={70} className="text-zinc-300" />
            <p>
              Id vitae sint a omnis voluptas ut repellat labore eum impedit
              laudantium eos animi illum.
            </p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Instagram size={70} className="text-zinc-300" />
            <p>
              Id vitae sint a omnis voluptas ut repellat labore eum impedit
              laudantium eos animi illum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
