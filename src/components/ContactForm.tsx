"use client";
import React, { MouseEvent, useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className=" mt-8 w-full space-y-6 max-w-xl mx-auto ">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="fullname" className="form-label">
          Fullt Navn
        </label>
        <input
          id="fullname"
          type="text"
          className="form-input"
          placeholder="John Doe"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fullname: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="email" className="form-label">
          Din E-post
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          placeholder="example@company.com"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="message" className="form-label">
          Melding
        </label>
        <textarea
          id="message"
          rows={7}
          className="form-textarea "
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Skriv din melding her..."
        />
      </div>

      <div className="w-full flex max-lg:justify-end">
        <button type="submit" className="btn-primary" onClick={handleSubmit}>
          Send melding
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
