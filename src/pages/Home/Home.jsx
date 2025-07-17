import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../../assets/profile.png'
import blog1 from "../../assets/blog_1.png"
import blog2 from "../../assets/blog_2.png"
import pepper from "../../assets/pepper.png"
import bos from "../../assets/bos.png"
import bhive from "../../assets/bhive.png"
import celsius from "../../assets/celsius.png"
import go from "../../assets/go.png"
import grey from "../../assets/grey.png"
import learnbay from "../../assets/learnbay.png"
import predis from "../../assets/predis.png"
import stuin from "../../assets/stuin.png"
import Marquee from 'react-fast-marquee';
import { FaVideo, FaHashtag, FaPenNib, FaRobot, FaPalette, FaRegObjectUngroup } from 'react-icons/fa';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import resumePDF from '../../assets/Natalia_Resume.pdf';
const logos = [
    pepper,
   bos,
    bhive,
    celsius,go,grey,learnbay,predis,stuin
  ];


export const Home = () => {


    function YouTubeThumbnail({ url, width = 480, height = 270 }) {
        const getYouTubeID = (url) => {
          const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
          const match = url.match(regExp);
          return match ? match[1] : null;
        };
      
        const videoId = getYouTubeID(url);
        const thumbnailUrl = videoId
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : null;
      
        if (!videoId) return <p>Invalid YouTube URL</p>;
      
        return (
          <div  data-aos-once={true} className="yt-thumbnail-card" style={{ width, height, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              width={width}
              height={height}
              style={{ objectFit: 'cover', cursor: 'pointer', borderRadius: '16px', width: '100%', height: '100%' }}
              onClick={() => window.open(url, '_blank')}
            />
          </div>
        );
      }
       function getYouTubeThumbnail(url, quality = 'hqdefault') {
        const regExp =
          /(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regExp);
        if (!match) return null;
        const videoId = match[1];
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
      }
      function YouTubeShortsThumbnail({ url, width = 320, height = 180 }) {
        const thumbnail = getYouTubeThumbnail(url);
      
        if (!thumbnail) return <p>Invalid YouTube Shorts URL</p>;
      
        return (
          <div  data-aos-once={true} style={{ width, height, overflow: 'hidden' }}>
            <img
              src={thumbnail}
              alt="YouTube Shorts Thumbnail"
              width={width}
              height={height}
              style={{ objectFit: 'cover', cursor: 'pointer', borderRadius: '16px', width: '100%', height: '100%' }}
              onClick={() => window.open(url, '_blank')}
            />
          </div>
        );
      }


const [index, setIndex] = React.useState(0);
React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section className="hero-section" id="hero-section">
        <div className="hero-content">
            <h2 className="hero-intro">I'm</h2>
            <h1 className="hero-title">Natalia Shiny</h1>
            <h2 className="hero-role">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Social Media Manager',
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  'Video Content Producer ',
                  1500,
                  'On-Camera Host / Anchor',
                  1500,
                  'Generative Content Specialist',
                  1500,
                  'Scriptwriter',
                  1500,

                ]}
                wrapper="span"
                speed={20}
                style={{  display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
            <div className="hero-experience">
              <span>Where content meets conversion.
 <br/>Story-led. Strategy-backed. AI-powered.

              </span>
            </div>
            <div className="hero-buttons">
              <a href="mailto:shinynatalia@gmail.com" className="btn btn-primary">Say Hello</a>
              <a href="#featured-projects-section" className="btn btn-outline" onClick={e => {
                e.preventDefault();
                const section = document.getElementById('featured-projects-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}>My Works</a>
            </div>
            
           
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              <img src={heroImage} width={500} height={"auto"} alt="Hero Image" />
            </div>
          </div>
       
      </section>
      <div className="hero-video-link">
          <Marquee speed={50} gradient={true}>
            {logos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Logo ${index}`}
                style={{ height: 50, marginRight: 50 }}
              />
            ))}
          </Marquee>
        </div>
      <section className="about-highlight-section">
        <div className="about-highlight-text">
          I transform ideas into<span className="highlight"> high-impact content</span> that helps brands <span className="highlight"> connect</span> deeply,<span className="highlight">  convert</span> consistently, and grow confidently.
        </div>
        <div className="about-highlight-resume">
          <a href={resumePDF} className="resume-link" download="Natalia_Resume.pdf">Download My Resume <span>&rarr;</span></a>
        </div>
        <div className="about-highlight-stats">
          <div data-aos="zoom-in" className="stat-circle">
            <div className="stat-value">2.1M</div>
            <div className="stat-label">Youtube Views</div>
          </div>
          <div data-aos="zoom-in"  className="stat-circle">
            <div className="stat-value">172K</div>
            <div className="stat-label">LinkedIn Impressions</div>
          </div>
          <div data-aos="zoom-in"  className="stat-circle">
            <div className="stat-value">17+</div>
            <div className="stat-label">Clients</div>
          </div>
          <div data-aos="zoom-in"  className="stat-circle">
            <div className="stat-value">5+</div>
            <div className="stat-label">Industries</div>
          </div>
          <div data-aos="zoom-in" className="stat-circle">
            <div className="stat-value">1K+</div>
            <div className="stat-label">Copies Written</div>
          </div>
          <div data-aos="zoom-in" className="stat-circle">
            <div className="stat-value">150+</div>
            <div className="stat-label">Leads Generated</div>
          </div>
        </div>
      </section>
      <section className="specialities-section">
        <h2 className="specialities-title">My Specialities</h2>
        <div className="specialities-cards">
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaVideo size={40} color="#222" />
            </div>
            <div  className="speciality-label">Video Content Creation
</div>
            <ul className="speciality-list">
              <li>Scripting & Shooting</li>
              <li>Editing & Engagement
</li>
              <li>YouTube Management
</li>
            </ul>
          </div>
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaHashtag size={40} color="#222" />
            </div>
            <div className="speciality-label">Social Media Strategy</div>
            <ul className="speciality-list">
              <li>Strategy Building</li>
              <li>Content Calendar </li>
              <li>Lead Generation
</li>
            </ul>
          </div>
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaPenNib size={40} color="#222" />
            </div>
            <div className="speciality-label">Copywriting & Content</div>
            <ul className="speciality-list">
              <li>SEO Copy</li>
              <li>Brand Messaging</li>
              <li>Viral Hooks</li>
            </ul>
          </div>
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaRobot size={40} color="#222" />
            </div>
            <div  className="speciality-label">AI + GEO Content
</div>
            <ul className="speciality-list">
              <li>AI Tools</li>
              <li>GEO Optimization
</li>
              <li>Content Automation
</li>
            </ul>
          </div>
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaPalette size={40} color="#222" />
            </div>
            <div className="speciality-label">UI/UX Design</div>
            <ul className="speciality-list">
              <li>Trend Design</li>
              <li>User Experience</li>
              <li>Design Thinking</li>
            </ul>
          </div>
          <div data-aos="flip-left" className="speciality-card">
            <div className="speciality-icon">
              <FaRegObjectUngroup size={40} color="#222" />
            </div>
            <div className="speciality-label">Interactive Design</div>
            <ul className="speciality-list">
              <li>Animations</li>
              <li>Transitions</li>
              <li>Microinteractions</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="featured-projects-section" id="featured-projects-section">
        <h2 className="featured-projects-title">Featured Projects</h2>
        <div className="featured-projects-subsection">
          <h3 className="featured-projects-subtitle">Video Anchor & Host</h3>
          <div className="featured-projects-cards">
            {[
              'https://www.youtube.com/watch?v=UuZXEwnZhlk&t=68s',
              'https://www.youtube.com/watch?v=5fjRBHyySK8&t=92s',
              'https://youtu.be/W2kOnnG6048',
              'https://www.youtube.com/watch?v=vUsBnx5rNzA&t=21s',
              'https://www.youtube.com/watch?v=4nOt-ioj4a0',
              'https://www.youtube.com/watch?v=2MwU1AYkvT0&list=PL2cQndyia4lINwv9CnNnjhsViiObq6WPn&index=63',
              'https://www.youtube.com/watch?v=TfBwp8GI8Rw&list=PL2cQndyia4lINwv9CnNnjhsViiObq6WPn&index=18',
              'https://www.youtube.com/watch?v=H_GpVieDYcc&list=PL2cQndyia4lINwv9CnNnjhsViiObq6WPn&index=69',
              'https://www.youtube.com/watch?v=TLuiMXGV3as&list=PLSb8M3klIr7zgTsEsZ_Ta9rn5TvKP28CR&index=170',
              'https://www.youtube.com/watch?v=ZlCNH4FaFvw&list=PLSb8M3klIr7zgTsEsZ_Ta9rn5TvKP28CR&index=1&t=1s',
              'https://www.youtube.com/watch?v=55c24lgYlf8&list=PLSb8M3klIr7zgTsEsZ_Ta9rn5TvKP28CR&index=4'
            ].map((url) => (
              <YouTubeThumbnail key={url} url={url} width={320} height={180} />
            ))}
          </div>
        </div>
        <div className="featured-projects-subsection">
          <h3 className="featured-projects-subtitle">Product Promotion</h3>
          <div className="featured-projects-cards">
            {[
            'https://www.youtube.com/shorts/QYP-slZuoNo',
            "https://www.youtube.com/shorts/7sRKV4hvX4c",
            'https://www.youtube.com/shorts/x9nJHd53Y-A',
            'https://www.youtube.com/shorts/p2pydgKYnrA',
            ].map((url) => (
              <YouTubeShortsThumbnail key={url} url={url} width={320} height={280} />
            ))}
          </div>
        </div>
      </section>
      <section className="recent-blog-section" id="recent-blog-section">
        <h2 className="recent-blog-title">Recent Blog</h2>
        <div className="recent-blog-cards">
          {[
            {
              image: blog1,
              date: 'July 15, 2025',
              title: 'GEO vs SEO: How to Stay Visible in the Age of AI Search.',
              url: 'https://www.linkedin.com/pulse/geo-vs-seo-how-stay-visible-age-ai-search-natalia-shiny-cl8kc/?trackingId=ukeliJGiTwGKauR65WnJSw%3D%3D',
            },
            {
              image: blog2,
              date: 'April 10, 2025',
              title: 'I Quit My 9-5 for Freelancing... Here’s What No One Warned Me About!',
              url: 'https://www.linkedin.com/posts/nataliashiny_freelancers-contracts-activity-7300145124938850304-lnS6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABWFLC4BzmuyCG1wycocIQwvarqWBDELxvE',
            },
            // {
            //   image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            //   date: 'July 2, 2023',
            //   title: 'How To Stay Creative As A Designer',
            //   url: '#',
            // },
          ].map((blog, idx) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact-section">
        <div className="contact-main-row">
          <div className="contact-main-left">
            <h2 className="contact-title">Get in Touch with me</h2>
          </div>
          <div className="contact-main-right">
            <p className="contact-intro">Whether you’re here to discuss your next big idea, book me for a project, or just confess that you binge-watched my reels at 2 AM (no judgment), I’m all ears.<br/><br/>
            I’m currently accepting:<br/>
            <ul className="contact-list">
              <li>Freelance gigs that don’t kill the creative vibe</li>
              <li>Brand collabs that scream authentic and fun</li>
              <li>Voiceovers, hosting, scripts, strategy—you name it</li>
              <li>Coffee chats with fellow creators, dreamers, and doers ☕</li>
            </ul>
            Slide into my inbox like you’d slide into a Netflix binge—boldly and with snacks nearby.</p>
          </div>
        </div>
        <div className="contact-cards-row">
          <div className="contact-card contact-card-email">
            <span className="contact-card-icon">✉️</span>
            <a href="mailto:shinynatalia@gmail.com">shinynatalia@gmail.com</a>
          </div>
          <div className="contact-card contact-card-phone">
            <span className="contact-card-icon">📞</span>
            <a href="tel:9739806010">9739806010</a>
          </div>
          <div className="contact-card contact-card-cv">
            <span className="contact-card-icon">📄</span>
            <a href={resumePDF} className="contact-card-link" download="Natalia_Resume.pdf">Download CV</a>
          </div>
          <div className="contact-card contact-card-socials">
            <a href="https://www.youtube.com/@natflex-natalia" className="contact-social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube size={22} color="#222" /></a>
            <a href="https://www.linkedin.com/in/nataliashiny/" className="contact-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} color="#222" /></a>
            <a href="https://www.instagram.com/nataliashinybay/" className="contact-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={22} color="#222" /></a>
          </div>
        </div>
        <p className="contact-fast-reply">I usually reply faster than your WiFi after a router reset. 🫶</p>
      </section>
    </>
  );
}

function BlogCard({ image, date, title, url }) {
  return (
    <div  data-aos="flip-up" className="blog-card" onClick={() => window.open(url, '_blank')}>
      <div className="blog-card-img-wrap">
        <img src={image} alt={title} className="blog-card-img" />
      </div>
      <div className="blog-card-date">{date}</div>
      <div className="blog-card-title">{title}</div>
    </div>
  );
}


