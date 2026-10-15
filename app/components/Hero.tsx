import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div>
        <Image
          src="/image.png"
          alt="Ain Zulaikha"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <p className="text-indigo-700 font-medium mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ain Zulaikha</h1>
        <p className="text-xl md:text-2xl text-indigo-700 font-medium mb-4">
          Data &amp; Digital Analytics Executive
        </p>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Computer Science graduate who turns messy data and unclear processes
          into accurate, decision-ready outputs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-full hover:bg-indigo-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}