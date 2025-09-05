// Hero.jsx
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden relative">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down" data-aos-delay="200">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            {/* Cambié el button por un <a> */}
            <a href="#contact">
              <button className="btn text-white">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={200 + (i * 300)}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96 relative overflow-hidden">
          <img
            src={hero.image}
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="3000"
            data-aos-once="true"
            data-aos-easing="ease-out-cubic"
            alt="..."
            className="h-full object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;