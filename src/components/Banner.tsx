import React from "react";

type BannerProps = {
  src: string;
};

function Banner({
  src,
  children,
}: BannerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={` bg-no-repeat bg-center bg-cover h-96 flex items-center justify-center text-white shadow-lg`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {children}
    </section>
  );
}

export default Banner;
