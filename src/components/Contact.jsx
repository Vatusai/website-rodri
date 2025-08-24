import { useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"; // Import Axios for making HTTP requests
import "./formStyles.css";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

const Contact = () => {
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
    <section className="bg-dark_primary text-black" id="contact">
      <Toaster />
      <div className="md:container px-5 py-0.5">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <div data-aos="fade-up" className="flex-1 items-stretch">
            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
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
                  <h2>Datos del Evento</h2>
                  <label htmlFor="mce-EMAIL">
                    Dirección de correo electrónico <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    value={formData.EMAIL}
                    onChange={handleChange}  // Actualiza el estado al cambiar el valor
                    required
                    placeholder="Correo Electrónico"
                  />
                  <label htmlFor="mce-MMERGE2">Nombre</label>
                  <input
                    type="text"
                    name="MMERGE2"
                    id="mce-MMERGE2"
                    value={formData.MMERGE2}
                    onChange={handleChange}
                    placeholder="Nombre de la persona que nos contrata"
                  />
                  <label htmlFor="mce-MMERGE14">Teléfono o WhatsApp del Organizador/a</label>
                  <input
                    type="text"
                    name="MMERGE14"
                    id="mce-MMERGE14"
                    value={formData.MMERGE14}
                    onChange={handleChange}
                    placeholder="Para contactarle en caso de dudas"
                  />
                  <label htmlFor="mce-MMERGE13">Fecha del Evento *</label>
                  <input
                    type="text"
                    name="MMERGE13"
                    id="mce-MMERGE13"
                    value={formData.MMERGE13}
                    onChange={handleChange}
                    required
                    placeholder="Para ver nuestra disponibilidad"
                  />
                  <label htmlFor="mce-MMERGE10">Hora del Evento</label>
                  <input
                    type="text"
                    name="MMERGE10"
                    id="mce-MMERGE10"
                    value={formData.MMERGE10}
                    onChange={handleChange}
                    placeholder="Hora estimada"
                  />
                  <label htmlFor="mce-MMERGE7">Lugar del Evento</label>
                  <input
                    type="text"
                    name="MMERGE7"
                    id="mce-MMERGE7"
                    value={formData.MMERGE7}
                    onChange={handleChange}
                    placeholder="Dónde se realizará el evento?"
                  />
                  <strong>Servicio a Contratar</strong>
                  {[
                    "Violin Solista",
                    "2 Músicos: Guitarrista-Cantante y Violin",
                    "2 Músicos: Duo Violin y Cello",
                    "3 Músicos: Trio de Cuerdas",
                    "2 Músicos: Violin y Arpa",
                    "3 Músicos: Violin, Guitarrista y Cantante",
                    "Ensamble Mixto: Indiquenos en Requerimientos",
                  ].map((service, index) => (
                    <div key={index} className="flex flex-col items-baseline">
                      <input
                        type="radio"
                        name="MMERGE5"
                        id={`mce-MMERGE5-${index}`}
                        value={service}
                        onChange={handleChange} // Esto actualiza el valor cuando se selecciona un servicio
                      />
                      <label htmlFor={`mce-MMERGE5-${index}`}>{service}</label>
                    </div>
                  ))}
                  <label htmlFor="mce-MMERGE9">Cantidad de horas</label>
                  <select
                    name="MMERGE9"
                    id="mce-MMERGE9"
                    value={formData.MMERGE9}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione...</option>
                    {["1H", "2H", "3H", "1H o 2H", "Lo indicaré en Requerimientos. Aún no estoy seguro/a"].map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="mce-MMERGE11">Precio Estimado</label>
                  <input
                    type="text"
                    name="MMERGE11"
                    id="mce-MMERGE11"
                    value={formData.MMERGE11}
                    onChange={handleChange}
                    placeholder="₡ colones o $ dólares"
                  />
                  <label htmlFor="mce-MMERGE8">Preguntas o Requerimientos</label>
                  <input
                    type="text"
                    name="MMERGE8"
                    id="mce-MMERGE8"
                    value={formData.MMERGE8}
                    onChange={handleChange}
                    placeholder="Escriba aquí cuales son sus requerimientos"
                    style={{ width: '100%', padding: '0.75em' }}
                  />
                  <button
                    type="submit"
                    className="btn bg-white text-dark_primary"
                  >
                    Enviar
                  </button>
                  {/* ⬇️ NUEVO BLOQUE DE REDES SOCIALES */}
                  <div className="mt-6"></div>
                  <h3 className="text-sm font-light font-serif text-black tracking-wide mb-2">También puedes contactarme por:</h3>
                  <div className="flex flex-col gap-2">
                     {Contact.social_media.map((item, index) => (
                       <a
                         key={index}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-accent transition-all"
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