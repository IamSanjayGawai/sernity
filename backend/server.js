// // server.js
// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: "*" })); 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Contact API
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail
//         pass: process.env.EMAIL_PASS, // app password
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "sammeddevelopers@gmail.com", // your company email
//       subject: `New Inquiry from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ success: true, message: "Enquiry sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to send enquiry." });
//   }
// });

// app.listen(PORT, () =>
//   console.log(`🚀 Server running at http://localhost:${PORT}`)
// );


import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });
    

    transporter.verify((err, success) => {
      if (err) console.error("SMTP verification failed:", err);
      else console.log("SMTP ready");
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sammeddevelopers@gmail.com",
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send enquiry." });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
