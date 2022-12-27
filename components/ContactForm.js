import React from "react";
import MagneticButton from "./MagneticButton";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <div>
      <h2 className="text-xl md:text-3xl text-brick-red font-medium pb-4 md:pb-8">
        get in contact 👋
      </h2>
      <form
        action="/api/form"
        method="post"
        className="grid grid-cols-2 gap-2 md:gap-4"
      >
        <input
          type="text"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
          name="Name"
          placeholder="Name"
          id="name"
        />
        <input
          type="email"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
          name="Email"
          placeholder="Email"
          id="email"
          required
        />
        <textarea
          type="text"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-2"
          name="Message"
          placeholder="Message"
          id="message"
          rows={5}
        />
        <div>
          <MagneticButton type="submit">Submit</MagneticButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
