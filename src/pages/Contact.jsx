export default function Contact() {
  return (
    <section className="pt-24 pb-16 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contact <span className="text-[#00ADB5]">Us</span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-[#EEEEEE]/70 max-w-2xl mx-auto"
          >
            Get in touch with MPR POWER TECH for reliable Mechanical, Electrical &
            Plumbing engineering solutions.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* CONTACT FORM */}
          <div
            data-aos="fade-right"
            className="bg-[#393E46] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#EEEEEE]">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#222831] border border-[#00ADB5]/30 p-3 rounded
                text-[#EEEEEE] placeholder-[#EEEEEE]/50
                focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#222831] border border-[#00ADB5]/30 p-3 rounded
                text-[#EEEEEE] placeholder-[#EEEEEE]/50
                focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#222831] border border-[#00ADB5]/30 p-3 rounded
                text-[#EEEEEE] placeholder-[#EEEEEE]/50
                focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#222831] border border-[#00ADB5]/30 p-3 rounded
                text-[#EEEEEE] placeholder-[#EEEEEE]/50
                focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#00ADB5] text-[#222831] py-3 rounded font-semibold
                hover:bg-[#EEEEEE] hover:text-[#222831]
                transition-all duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* MAP */}
          <div
            data-aos="fade-left"
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="MPR Power Tech Location"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d500.85849864615454!2d79.94218286214058!3d12.6610973732057!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1752931988924!5m2!1sen!2sin"
              className="w-full h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}
