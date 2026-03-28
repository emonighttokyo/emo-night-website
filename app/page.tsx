"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/hero-logo.png" alt="Emo Night Tokyo logo" />
          </a>

          <nav className="site-nav">
            <a href="#about">ABOUT US</a>
            <a href="#event">NEXT EVENT</a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScdlOr99HYUlMh97JZO8_eEBwqbQJao3uyhvlAeCKUh3sgNJQ/viewform?usp=sharing&ouid=116718627686524602517"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT
            </a>
          </nav>

          <a href="#event" className="ticket-button">
            BUY TICKETS ↗
          </a>
        </div>
      </motion.header>

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="container hero-content">
          <p className="hero-label">
            TOKYO EMO / ALT / ROCK / METAL NIGHT
          </p>

          <h1 className="hero-title">Saddest Party In Tokyo</h1>
        </div>
      </section>

      <section className="next-event-section" id="event">
        <div className="container next-event-grid">
          <motion.div
            className="next-event-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="next-event-tag">NEXT EVENT</div>
            <h2 className="next-event-date">MAY 2</h2>
            <p className="next-event-venue">Circus Shibuya</p>
          </motion.div>

          <motion.div
            className="next-event-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="event-card">
              <div className="event-poster">
                <div
                  className="event-poster-text"
                  style={{
                    color: "#fff",
                    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                  }}
                >
                  To Be Announced
                </div>
              </div>

              <a href="#" className="event-ticket-strip">
                <span>EVENT INFO</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="tickets" />

      <section className="section about-section" id="about">
        <div className="container">
          <motion.h2
            className="about-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            ABOUT US
          </motion.h2>

          <motion.p
            className="about-content about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Emo Night Tokyo is the saddest party in Tokyo. Since April 2022,
            we’ve created a space for people to connect through emo,
            alternative, rock, and metal music — built on nostalgia, emotion,
            and community.
            <br />
            <br />
            This isn’t your typical club night. It’s a gathering of like-minded
            people who come to sing, scream, and feel something together.
            <br />
            <br />
            From local Japanese acts to international artists, we aim to
            showcase music that brings cultures, emotions, and people together.
            <br />
            <br />
            Join us for the saddest night in Tokyo.
          </motion.p>

          <div className="about-scroll">
            <div className="about-scroll-track">
              {Array.from({ length: 16 }).map((_, i) => (
                <img
                  key={`img-${i}`}
                  src={`/about-${i + 1}.jpg`}
                  alt={`About ${i + 1}`}
                />
              ))}

              {Array.from({ length: 16 }).map((_, i) => (
                <img
                  key={`img-dup-${i}`}
                  src={`/about-${i + 1}.jpg`}
                  alt={`About duplicate ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-section" id="contact">
        <div className="container bottom-grid">
          <div className="bottom-left">
            <div className="social-col">
              <a
                href="https://www.instagram.com/emonighttokyo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>

              <a
                href="https://www.facebook.com/p/Emo-Night-Tokyo-61567153775254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FACEBOOK
              </a>

              <a
                href="https://www.tiktok.com/@emonighttokyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                TIKTOK
              </a>
            </div>

            <div className="social-col">
              <a
                href="https://x.com/EmoNightTokyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (TWITTER)
              </a>

              <a
                href="https://www.reddit.com/r/EmoNightTokyo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                REDDIT
              </a>

              <a
                href="https://www.bandsintown.com/a/15525557-emo-night-tokyo?came_from=250&utm_medium=web&utm_source=home&utm_campaign=search_bar&noindex=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                BANDSINTOWN
              </a>
            </div>
          </div>

          <div className="bottom-right">
            <div className="contact-top">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScdlOr99HYUlMh97JZO8_eEBwqbQJao3uyhvlAeCKUh3sgNJQ/viewform?usp=sharing&ouid=116718627686524602517"
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-contact-button"
              >
                CONTACT US
              </a>

              <p className="contact-text">
                For bookings and performance inquiries.
              </p>
            </div>

            <div className="bottom-line"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
