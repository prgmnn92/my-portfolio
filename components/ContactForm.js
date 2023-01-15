import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Howl } from "howler";

import { addFormSubmission } from "../firebase";
import MagneticButton from "./MagneticButton";

const ArrowIcon = (props) => {
  return (
    <svg
      {...props}
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.28755 1.84374C4.10401 21.1217 21.4014 30.4856 39.4591 32.6147C39.7691 32.6519 39.9921 32.9334 39.9549 33.2435C39.9178 33.5536 39.6363 33.7765 39.3262 33.7393C20.7627 31.5516 3.06233 21.8247 0.167274 2.00663C0.121548 1.69798 0.335903 1.41076 0.645988 1.36503C0.954639 1.31931 1.24182 1.53366 1.28755 1.84374Z"
        fill="#1e1e1e"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0537 33.1371C38.2507 32.5498 37.2347 31.8239 37.1218 31.7382C34.0624 29.4147 31.5274 26.7412 29.2954 23.6046C29.1139 23.3503 29.174 22.9959 29.4283 22.8144C29.6827 22.6329 30.037 22.693 30.2185 22.9473C32.3819 25.9895 34.8397 28.5831 37.8076 30.8365C37.9806 30.968 40.2655 32.5984 40.7027 32.9628C40.8828 33.1114 40.9385 33.2514 40.9485 33.2857C41.0085 33.4658 40.9728 33.6073 40.9242 33.7101C40.8685 33.8259 40.7299 33.9945 40.4613 34.0802C40.1798 34.1688 39.5538 34.2089 39.3967 34.2317C37.026 34.5832 34.3496 34.769 31.9132 35.4435C29.5898 36.0865 27.4821 37.1753 26.1303 39.3573C25.966 39.6231 25.6159 39.7046 25.3501 39.5403C25.0843 39.3759 25.0028 39.0258 25.1672 38.7601C26.679 36.3208 29.0139 35.0705 31.6103 34.3517C34.0324 33.6816 36.6845 33.4786 39.0537 33.1371Z"
        fill="#1e1e1e"
      />
    </svg>
  );
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const pop = new Howl({
    src: ["/assets/pop2.mp3"],
    volume: 0.7,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields to submit a message! :)");
      return 0;
    }

    const res = addFormSubmission(name, email, message);
    toast.success("Thanks for your message!");
    pop.play();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2 className="pb-4 text-xl font-medium md:text-3xl text-brick-red md:pb-8">
        get in contact 👋
      </h2>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-2 md:gap-4"
      >
        <input
          type="text"
          className="col-span-1 p-4 bg-white drop-shadow rounded-2xl"
          name="Name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="col-span-1 p-4 bg-white drop-shadow rounded-2xl"
          name="Email"
          placeholder="Email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          className="col-span-2 p-4 bg-white drop-shadow rounded-2xl"
          name="Message"
          placeholder="Message"
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="relative">
          <ArrowIcon className="absolute left-[140px] bottom-[-15px] rotate-180" />
          <MagneticButton type="submit">Submit</MagneticButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
