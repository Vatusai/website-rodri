import { useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { 
  MdArrowForward, 
  MdArrowBack, 
  MdCheckCircle, 
  MdPerson, 
  MdEvent, 
  MdMusicNote,
  MdAttachMoney 
} from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const ContactWizard = () => {
  const { Contact } = content;
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  // Validation rules for each step
  const validateStep = () => true;


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
    setIsSubmitting(true);

    try {
      await axios.post(
        "https://api.fabianorozco.com/generate-document", 
        formData, 
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      
      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
      
      // Reset form
      setFormData({
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
      setCurrentStep(1);
      
    } catch (error) {
      toast.error("Error al enviar la solicitud. Intenta de nuevo.");
      console.error("Error al enviar los datos:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.error("Por favor completa los campos requeridos");
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Steps configuration
  const steps = [
    { 
      number: 1, 
      title: "Datos de contacto", 
      icon: MdPerson,
    },
    { 
      number: 2, 
      title: "Detalles del Evento", 
      icon: MdEvent,
    },
    { 
      number: 3, 
      title: "Servicios Musicales", 
      icon: MdMusicNote,
    },
    { 
      number: 4, 
      title: "Presupuesto y Extras", 
      icon: MdAttachMoney,
    },
  ];

  // Progress indicator component
  const ProgressIndicator = () => (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-gray text-white ring-4 ring-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {isCompleted ? (
                  <MdCheckCircle size={24} />
                ) : (
                  <Icon size={24} />
                )}
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-full w-full h-1 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      isCompleted ? "bg-green-500" : "bg-gray-200"
                    }`}
                    style={{ width: "calc(100vw / 4 - 3rem)" }}
                  />
                )}
              </div>
              
              <div className="mt-2 text-center">
                <p className={`text-xs font-medium ${
                  isActive ? "text-white" : isCompleted ? "text-green-400" : "text-gray-400"
                }`}>
                  {step.title}
                </p>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Step content components
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Información Personal</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="EMAIL" className="block text-sm font-medium text-gray-200 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="EMAIL"
                  value={formData.EMAIL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                  placeholder="Email de la persona que nos contrata"
                />
              </div>
              
              <div>
                <label htmlFor="MMERGE2" className="block text-sm font-medium text-gray-200 mb-2">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  name="MMERGE2"
                  id="MMERGE2"
                  value={formData.MMERGE2}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                  placeholder="Quién nos contrata?"
                />
              </div>
              
              <div>
                <label htmlFor="MMERGE14" className="block text-sm font-medium text-gray-200 mb-2">
                  Teléfono o WhatsApp
                </label>
                <input
                  type="tel"
                  name="MMERGE14"
                  id="MMERGE14"
                  value={formData.MMERGE14}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                  placeholder="Le contactaremos por este medio"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Detalles del Evento</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="MMERGE13" className="block text-sm font-medium text-gray-200 mb-2">
                  Fecha del Evento
                </label>
                <input
                  type="date"
                  name="MMERGE13"
                  id="MMERGE13"
                  value={formData.MMERGE13}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                />
              </div>
              
              <div>
                <label htmlFor="MMERGE10" className="block text-sm font-medium text-gray-200 mb-2">
                  Hora del Evento
                </label>
                <input
                  type="time"
                  name="MMERGE10"
                  id="MMERGE10"
                  value={formData.MMERGE10}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                />
              </div>
              
              <div>
                <label htmlFor="MMERGE7" className="block text-sm font-medium text-gray-200 mb-2">
                  Lugar del Evento
                </label>
                <input
                  type="text"
                  name="MMERGE7"
                  id="MMERGE7"
                  value={formData.MMERGE7}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                  placeholder="Dirección del evento"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Servicios Musicales</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Servicio a Contratar
                </label>
                <div className="space-y-3">
                  {[
                    "Violin Solista",
                    "2 Músicos: Guitarrista-Cantante y Violin",
                    "2 Músicos: Duo Violin y Cello",
                    "3 Músicos: Trio de Cuerdas",
                    "2 Músicos: Violin y Arpa",
                    "3 Músicos: Violin, Guitarrista y Cantante",
                    "Ensamble Mixto: Indiquenos en Requerimientos",
                  ].map((service, index) => (
                    <label key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-600 hover:bg-gray-800 cursor-pointer transition-colors bg-gray-900">
                      <input
                        type="radio"
                        name="MMERGE5"
                        value={service}
                        checked={formData.MMERGE5 === service}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-accent focus:ring-accent border-gray-500 bg-gray-700"
                      />
                      <span className="text-white text-sm flex-1">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="MMERGE9" className="block text-sm font-medium text-gray-200 mb-2">
                  Duración del Evento
                </label>
                <select
                  name="MMERGE9"
                  id="MMERGE9"
                  value={formData.MMERGE9}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                >
                  <option value="">Seleccione la duración...</option>
                  {["1H", "2H", "3H", "1H o 2H", "Lo indicaré en Requerimientos. Aún no estoy seguro/a"].map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Presupuesto y Detalles Adicionales</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="MMERGE11" className="block text-sm font-medium text-gray-200 mb-2">
                  Presupuesto Estimado (Opcional)
                </label>
                <input
                  type="text"
                  name="MMERGE11"
                  id="MMERGE11"
                  value={formData.MMERGE11}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base"
                  placeholder="₡ colones o $ dólares"
                />
              </div>
              
              <div>
                <label htmlFor="MMERGE8" className="block text-sm font-medium text-gray-200 mb-2">
                  Preguntas o Requerimientos Especiales
                </label>
                <textarea
                  name="MMERGE8"
                  id="MMERGE8"
                  value={formData.MMERGE8}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark_primary focus:border-transparent text-gray-900 text-base resize-none"
                  placeholder="Cuéntanos sobre canciones específicas, detalles del evento, o cualquier pregunta que tengas..."
                />
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h4 className="font-medium text-base mb-2 text-white">Contáctame si tienes alguna duda:</h4>
                <div className="space-y-2">
                  {Contact.social_media.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white hover:text-accent transition-colors text-sm"
                      >
                        <Icon size={16} />
                        <span>{item.text}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-black text-white" id="contact-wizard">
      <Toaster position="top-center" />
      <div className="md:container px-5 py-16 bg-black">
        <div className="text-center mb-12 bg-transparent">
          <h2 className="title !text-white" data-aos="fade-down">
            {Contact.title}
          </h2>
          <h4 className="subtitle !text-white" data-aos="fade-down">
            {Contact.subtitle}
          </h4>
        </div>

        <div className="max-w-4xl mx-auto bg-transparent">
          <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-black to-gray-900 px-8 py-6">
              <ProgressIndicator />
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 bg-black">
              {renderStepContent()}
              
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === 1
                      ? "invisible"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  disabled={currentStep === 1}
                >
                  <MdArrowBack size={20} />
                  Anterior
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all"
                  >
                    Siguiente
                    <MdArrowForward size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                    {!isSubmitting && <MdArrowForward size={20} />}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWizard;