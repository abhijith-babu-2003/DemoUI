import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("Success ✅", result.text);
            toast.success("Your message has been sent successfully!"); // ✅ Toast instead of alert
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error("Error ❌", error.text);
            toast.error("Failed to send message. Please try again."); // ✅ Toast instead of alert
          }
        )

        .finally(() => setLoading(false));
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg">
          Have a question or want to work together? Fill out the form or reach
          us directly.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <p className="text-gray-600">
            Feel free to reach out through any of the following ways:
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> hello@averix.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span> Kochi, Kerala,
              India
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-black focus:ring-black px-4 py-2`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-black focus:ring-black px-4 py-2`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-black focus:ring-black px-4 py-2`}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
