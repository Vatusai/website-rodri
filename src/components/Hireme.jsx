import { getContent } from "../Content";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Hireme = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const content = getContent(language);
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {t.hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t.hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{t.hireme.para}</p>
            <br />
            {/* Agregar enlace con smooth scroll */}
            <a href="#contact">
              <button className="btn bg-dark_primary text-black">
                {t.hireme.btnText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;