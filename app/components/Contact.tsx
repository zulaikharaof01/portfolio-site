export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Interested in working together or want to know more? Get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:zulaikharaof.work@gmail.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ain-zulaikha-raof"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-full hover:bg-indigo-50"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-6">zulaikharaof.work@gmail.com</p>
      </div>
    </section>
  );
}