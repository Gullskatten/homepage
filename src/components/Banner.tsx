import React from "react";

type BannerProps = {
  bannerUrl: String;
};

function Banner({
  bannerUrl,
  children,
}: BannerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={`bg-[url('${bannerUrl}')] bg-no-repeat bg-center bg-cover h-96 flex items-center justify-center text-white shadow-lg`}
    >
      {children}
    </section>
  );
}

export default Banner;
