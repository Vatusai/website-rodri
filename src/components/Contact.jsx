import { useState } from "react";
import { getContent } from "../Content";
import { useLanguage } from "../contexts/LanguageContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"; // Import Axios for making HTTP requests
import "./formStyles.css";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

const Contact = () => {
  const { language } = useLanguage();
  const content = getContent(language);
  const { Contact } = content;

  // State to manage form data
  const [formData, setFormData] = useState({
    EMAIL: "",
    MMERGE2: "",
    MMERGE5: "",
    MMERGE7: "",
    MMERGE8: "",
    MMERGE9: "",
    MMERGE10: "",
    MMERGE11: "",
    MMERGE13: "",
    MMERGE14: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Verifica los datos antes de enviarlos
  console.log("Datos enviados al servidor:", formData);

  try {
    // Send the form data to the backend with the ngrok-skip-browser-warning header
    await axios.post(
      "https://api.fabianorozco.com/generate-document", 
      formData, 
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // Show success notification
    toast.success("Datos Enviados, Gracias por su preferencia.");
  } catch (error) {
    // Handle errors
    toast.error("Error al generar el documento555.");
    console.error("Error al enviar los datos:", error);
  }
};

  return (
    <section className="bg-black text-white" id="contact">
      <Toaster />
      <div className="md:container px-4 sm:px-6 py-8 sm:py-12 bg-black">
        <h2 className="title !text-background text-2xl sm:text-3xl" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle text-base sm:text-lg" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-8 md:flex-row flex-col bg-black">
          <div data-aos="fade-up" className="flex-1 bg-black">
            <div id="mc_embed_shell" className="bg-black">
              <div id="mc_embed_signup" className="bg-black">
                <form
                  // Acción de Mailchimp para enviar los datos a su servidor
                  action="https://fabianorozco.us9.list-manage.com/subscribe/post?u=f880ad3daf94175f170393dfb&amp;id=9fff48ed2b&amp;f_id=0054d4e3f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate form-container"
                  target="_blank"
                  onSubmit={handleSubmit}  // Maneja el envío con el evento handleSubmit
                >
                  <h2 className="text-xl sm:text-2xl mb-4">Datos del Evento</h2>
                  <label htmlFor="mce-EMAIL" className="text-sm sm:text-base text-white font-medium mb-2 block">
                    Dirección de correo electrónico <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    id="mce-EMAIL"
                    value={formData.EMAIL}
                    onChange={handleChange}
                    placeholder="Correo Electrónico"
                    required
                  />
                  <label htmlFor="mce-MMERGE2" className="text-sm sm:text-base text-white font-medium mb-2 block">Nombre</label>
                  <input
                    type="text"
                    name="MMERGE2"
                    id="mce-MMERGE2"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE2}
                    onChange={handleChange}
                    placeholder="Nombre de la persona que nos contrata"
                  />
                  <label htmlFor="mce-MMERGE14" className="text-sm sm:text-base text-white font-medium mb-2 block">Teléfono o WhatsApp del Organizador/a</label>
                  <input
                    type="text"
                    name="MMERGE14"
                    id="mce-MMERGE14"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE14}
                    onChange={handleChange}
                    placeholder="Para contactarle en caso de dudas"
                  />
                  <label htmlFor="mce-MMERGE13" className="text-sm sm:text-base text-white font-medium mb-2 block">Fecha del Evento <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="MMERGE13"
                    id="mce-MMERGE13"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE13}
                    onChange={handleChange}
                    placeholder="Para ver nuestra disponibilidad"
                    required
                  />
                  <label htmlFor="mce-MMERGE10" className="text-sm sm:text-base text-white font-medium mb-2 block">Hora del Evento</label>
                  <input
                    type="text"
                    name="MMERGE10"
                    id="mce-MMERGE10"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE10}
                    onChange={handleChange}
                    placeholder="Hora estimada"
                  />
                  <label htmlFor="mce-MMERGE7" className="text-sm sm:text-base text-white font-medium mb-2 block">Lugar del Evento</label>
                  <input
                    type="text"
                    name="MMERGE7"
                    id="mce-MMERGE7"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE7}
                    onChange={handleChange}
                    placeholder="Dónde se realizará el evento?"
                  />
                  <strong className="block mb-3 text-base text-white font-medium">Servicio a Contratar</strong>
                  {[
                    "Rodrigo como Cantante-Guitarrista",
                    "2 Músicos: Rodrigo Cantante-Guitarrista y Percusionista",
                    "3 Músicos: Rodrigo Cantante-Guitarrista, Percusión y Bajo",
                    "4 Músicos: Rodrigo Cantante, Guitarrista, Percusión y Bajo",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="MMERGE5"
                        id={`mce-MMERGE5-${index}`}
                        value={service}
                        onChange={handleChange} // Esto actualiza el valor cuando se selecciona un servicio
                        className="mr-2 w-5 h-5 accent-accent"
                      />
                      <label htmlFor={`mce-MMERGE5-${index}`} className="text-sm sm:text-base text-white ml-2 cursor-pointer">{service}</label>
                    </div>
                  ))}
                  <label htmlFor="mce-MMERGE9" className="text-sm sm:text-base text-white font-medium mb-2 block">Cantidad de horas</label>
                  <select
                    name="MMERGE9"
                    id="mce-MMERGE9"
                    value={formData.MMERGE9}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Seleccione...</option>
                    {["1H", "2H", "3H", "1H o 2H", "Lo indicaré en Requerimientos. Aún no estoy seguro/a"].map((option, index) => (
                      <option key={index} value={option} className="text-base">
                        {option}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="mce-MMERGE11" className="text-sm sm:text-base text-white font-medium mb-2 block">Precio Estimado</label>
                  <input
                    type="text"
                    name="MMERGE11"
                    id="mce-MMERGE11"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE11}
                    onChange={handleChange}
                    placeholder="₡ colones o $ dólares"
                  />
                  <label htmlFor="mce-MMERGE8" className="text-sm sm:text-base text-white font-medium mb-2 block">Preguntas o Requerimientos</label>
                  <input
                    type="text"
                    name="MMERGE8"
                    id="mce-MMERGE8"
                    className="w-full p-3 sm:p-4 mb-4 text-base bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={formData.MMERGE8}
                    onChange={handleChange}
                    placeholder="Escriba aquí cuales son sus requerimientos"
                  />
                  <button
                    type="submit"
                    className="btn bg-background text-dark_primary w-full sm:w-auto min-h-[44px] px-6 py-3 text-base"
                  >
                    Enviar
                  </button>
                  {/* ⬇️ NUEVO BLOQUE DE REDES SOCIALES */}
                  <div className="mt-8"></div>
                  <h3 className="text-sm font-Source font-medium text-background tracking-wide mb-3">También puedes contactarme por:</h3>
                  <div className="flex flex-col gap-3">
                     {Contact.social_media.map((item, index) => (
                       <a
                         key={index}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-background hover:text-accent transition-all text-base"
                     >
                       <span className="text-xl">{<item.icon />}</span>
                       <span>{item.text}</span>
                      </a>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Aquí puedes agregar la sección para las redes sociales si lo necesitas */}
        </div>
      </div>
    </section>
  );
};

export default Contact;