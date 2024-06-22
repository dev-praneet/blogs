import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Scroll = () => {
  const { ref, inView, entry } = useInView({});


  useEffect(() => {
    console.log("useEffect ran");
    const handler = () => {
      console.log("scroll event fired. is inView? ", inView);
      //   if (inView) {
      // console.log("scrollIntoView called");
      // entry?.target.scrollIntoView({ behavior: "smooth" });
      //   }
    };

    const onScrollEnd = () => {
      console.log("scroll end event fired");
      //   inView && entry?.target.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("scroll", handler);
    window.addEventListener("scrollend", onScrollEnd);

    return () => {
      console.log("cleanup function ran");
      window.removeEventListener("scroll", handler);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, [inView, entry]);

  useEffect(() => {
    if (inView) {
      console.log("scrollIntoView triggered");
      entry.target.scrollIntoView({ behavior: "smooth" });
    }
  }, [inView, entry]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 border-red-300 w-full h-[70vh]"></div>
      <div className="border-2 border-red-300 w-full h-[70vh]"></div>
      <div
        ref={ref}
        className="border-2 border-green-300 w-full h-[170vh]"
      ></div>
    </main>
  );
};

export default Scroll;
