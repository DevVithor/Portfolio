import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export function Projects() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-zinc-50">
      <div className="flex h-full w-full max-w-[1320px] flex-col justify-center">
        <div className="flex h-full max-h-[20%] w-full">
          <h1 className="underline-offset-6 flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold text-zinc-950 underline decoration-yellow-500 decoration-4 underline-offset-8">
            PROJECTs
          </h1>
        </div>
        <h2 className="text-sm">
          Eos excepturi quod ea voluptate animi est minus animi eos magnam dicta
          qui repellendus sint et tempore placeat. Et numquam omnis ab galisum
          consequatur ad sint neque qui nulla sunt in architecto eius eos
          commodi placeat et totam vitae. Id vitae sint a omnis voluptas ut
          repellat labore eum impedit laudantium eos animi illum.
        </h2>
        <div className="swiper-3 flex h-full max-h-[600px] w-full pt-10">
          <Swiper spaceBetween={5} slidesPerView={3} className="swiper-3">
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project1 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Integração Ifood</h1>
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Et numquam omnis ab galisum consequatur ad sint neque qui
                  nulla sunt in architecto eius eos commodi placeat et totam
                  vitae. Id vitae sint a omnis voluptas ut repellat labore eum
                  impedit laudantium eos animi illum. Et numquam omnis ab
                  galisum consequatur ad sint neque qui nulla sunt in architecto
                  eius eos commodi placeat et totam vitae. Id vitae sint a omnis
                  voluptas ut repellat labore eum impedit laudantium eos animi
                  illum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project2 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Efi Payment</h1>{" "}
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Et numquam omnis ab galisum consequatur ad sint neque qui
                  nulla sunt in architecto eius eos commodi placeat et totam
                  vitae. Id vitae sint a omnis voluptas ut repellat labore eum
                  impedit laudantium eos animi illum. Et numquam omnis ab
                  galisum consequatur ad sint neque qui nulla sunt in architecto
                  eius eos commodi placeat et totam vitae. Id vitae sint a omnis
                  voluptas ut repellat labore eum impedit laudantium eos animi
                  illum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project3 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Telegram Bot</h1>
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Et numquam omnis ab galisum consequatur ad sint neque qui
                  nulla sunt in architecto eius eos commodi placeat et totam
                  vitae. Id vitae sint a omnis voluptas ut repellat labore eum
                  impedit laudantium eos animi illum. Et numquam omnis ab
                  galisum consequatur ad sint neque qui nulla sunt in architecto
                  eius eos commodi placeat et totam vitae. Id vitae sint a omnis
                  voluptas ut repellat labore eum impedit laudantium eos animi
                  illum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
