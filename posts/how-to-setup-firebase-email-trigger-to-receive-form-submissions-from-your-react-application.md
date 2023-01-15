---
title: "How to setup firebase email trigger to receive form submissions from your react application"
date: "2023-01-15"
category: "howto"
image: "/images/Firebase1.png"
description: "Form submissions made easy"
---

# How to setup firebase email trigger to receive form submissions from your react application

I was looking for a easy solution to receive form submissions from my website directly into my email box. Fortunately I discovered that Firebase has a extension that exactly does what I need and wanted. A “Trigger Email” extension. You can check it out [here](https://extensions.dev/extensions/firebase/firestore-send-email). In this article I’ll explain you how you can set the trigger email extension for yourself.

## Create A Firebase Project

First of all you need to create a firebase project where you can add the email trigger extension to. Go into the [firebase console](https://console.firebase.google.com/) and create a new project. Then add a new App based on your project type and follow the steps that firebase gives you.

1. Install firebase

```bash
npm install firebase
```

1. Add basic setup to your project.

```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "*",
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Add Trigger Email to your Firebase Project

Now you can add the extension to your project. You go to Development and Extensions. There you should find the extension directly.

![Email Trigger Extension](/images/settings.png)

You need to upgrade your plan to “Blaze” to enable the extension but as long you don’t go over a certain amount of submissions per month this will stay free. You are able set your budget to $0. Then follow the next steps until step 4, where you can configure your extension. In the following image you can see how I set up my project. If you’re using gmail and wondering how to get your SMTP password read the following section.

![Settings for email trigger](/images/settings2.png)

### **How to get the App Password for Gmail**

You can’t use your regular sign-in password for an SMTP connection. Instead, you can create an App Password using your Gmail account. To do so, follow these steps:

1. Go to [myaccount.google.com](https://myaccount.google.com/)
2. Go to **Security** (from the left/right panel)
3. Scroll down to **Signing in to Google**

   ![http://cms.invertase.io/wp-content/uploads/2022/10/app-password-gmail.png](http://cms.invertase.io/wp-content/uploads/2022/10/app-password-gmail.png)

4. If you don’t have 2-step verification, you must first turn it on. Once you finish, you will be able to see the “**App Passwords**” option
5. From the dropdown menu, choose “**Other (custom name)**”

   ![http://cms.invertase.io/wp-content/uploads/2022/10/creating-password.png](http://cms.invertase.io/wp-content/uploads/2022/10/creating-password.png)

6. Provide a name for this password, for example, **`Firebase Trigger Email Extension`**
7. A dialog will show with a random password, make sure to copy it, then click **Done**

   ![http://cms.invertase.io/wp-content/uploads/2022/10/password.png](http://cms.invertase.io/wp-content/uploads/2022/10/password.png)

8. The new password will be added to your list

Go back to your configuration in the Firebase console, then go to the Trigger Email extension, click **Reconfigure extension** and paste the password in **`SMTP password`** field.

## Add Firebase Email Trigger to your Website

Firebase should now be ready to go and you only need to add the functionalty to your project. The following code will show you how I implemented the functionality for my form submissions.

### Firebase Add Doc Functionality

```jsx
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
...
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const triggerFormSubmission = (
  name,
  email,
  message,
) => {
  const docRef = addDoc(collection(db, "submissions"), {
    to: "pargmann92@gmail.com",
    message: {
      subject: `Form Submission from ${name}!, ${email}`,
      html: `${message}`,
    },
    email: email,
    name: name,
    date: Timestamp.now(), // Add as many custom fields as you like
  })
    .then((docRef) => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });

  return docRef.id;
};
```

### React Contact Form

```jsx
import React, { useState } from "react";

import { triggerFormSubmission } from "../firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = addFormSubmission(name, email, message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-2 md:gap-4"
      >
        <input
          type="text"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
          name="Name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
          name="Email"
          placeholder="Email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          className="drop-shadow bg-white rounded-2xl p-4 col-span-2"
          name="Message"
          placeholder="Message"
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="relative">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
```

And that’s it! Now you should see an email in your inbox whenever your form gets triggered.

If you have any further questions don’t hesitate to reach out to me!
