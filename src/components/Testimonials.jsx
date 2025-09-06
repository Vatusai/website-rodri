import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const isMobile = window.innerWidth <= 768;

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section-pop-artist">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-16 w-36 h-36 bg-accent/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-tertiary/5 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-text p-6 mb-4 inline-block">
            <h2 className="section-title-pop text-white" data-aos="fade-down">
              {Testimonials.title}
            </h2>
          </div>
          <div className="glass-text p-4 max-w-lg mx-auto">
            <p className="section-subtitle-pop text-white" data-aos="fade-down" data-aos-delay="200">
              {Testimonials.subtitle}
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            direction={isMobile ? "horizontal" : "horizontal"}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            data-aos="fade-up"
            data-aos-delay="300"
            loop={true}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 1}
            centeredSlides={true}
            onSlideChange={(e) => {
              setActiveIndex(e.realIndex);
            }}
            modules={[Pagination]}
            className="pb-16 h-auto"
          >
            {Testimonials.testimonials_content.map((content, i) => (
              <SwiperSlide key={i}>
                <div className="card-pop-artist glass-card max-w-4xl mx-auto">
                  {/* Quote decoration */}
                  <div className="absolute top-6 left-6 text-6xl text-accent/20 font-serif leading-none">
                    "
                  </div>
                  
                  <div className="pt-12 pb-8 px-8 md:px-12">
                    {/* Review text */}
                    <div className="mb-8">
                      <p className="text-lg md:text-xl text-text_secondary leading-relaxed italic text-center">
                        {content.review}
                      </p>
                    </div>

                    {/* Client info */}
                    <div className="flex items-center justify-center gap-6">
                      {/* Client avatar */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-accent/30">
                          <img 
                            src={content.img} 
                            alt={content.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Online indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-tertiary rounded-full border-3 border-bg_light flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Client details */}
                      <div className="text-center">
                        <h4 className="text-xl font-600 text-text_primary mb-1">
                          {content.name}
                        </h4>
                        
                        {/* Star rating */}
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[...Array(5)].map((_, star) => (
                            <svg 
                              key={star}
                              className="w-4 h-4 text-gold fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>

                        {/* Client type badge */}
                        <div className="flex items-center justify-center gap-2 text-sm">
                          {i === 0 && (
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Follower</span>
                          )}
                          {i === 1 && (
                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">Follower</span>
                          )}
                          {i === 2 && (
                            <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full">Follower</span>
                          )}
                          {i === 3 && (
                            <span className="px-3 py-1 bg-gold/10 text-gold rounded-full">Follower</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom quote decoration */}
                  <div className="absolute bottom-6 right-6 text-6xl text-accent/20 font-serif leading-none transform rotate-180">
                    "
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
