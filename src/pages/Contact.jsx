
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can handle form submission logic here, like sending the data to a server
  };

  return (
    <section class="relative overflow-hidden pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
      {/* Contact Section */}
      <div className="relative z-20 w-full pt-15 flex flex-col justify-center items-center">
        <section className="py-6 ">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-none text-center sm:text-5xl">
            {t("Let's Talk")}
            </h1>
            <p class="p-4 text-2xl max-w-2xl text-center dark:text-gray-600">
            {t('ContactDescription')}
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="mx-auto mt-16 px-6 max-w-xl sm:mt-20"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="Your First Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    placeholder="Your Last Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Your Company Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Your Email Address"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Your Phone Number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts..."
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-sm py-2 w-full block cursor-pointer"
              >
                Submit →
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
