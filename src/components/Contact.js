import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Contact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    server_error: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  const handleInputChange = (event) => {
    setErrors((prev) => ({
      ...prev,
      [event.target.name]: "",
      ["server_error"]: "",
    }));

    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const sendContactData = async (formInput) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wront!");
    }

    return data;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setErrors({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      server_error: "",
    });

    setSuccessMessage("");
    setLoading(true);
    // client side validation

    let check = false;
    if (formInput.name.length <= 0) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["name"]: "Name should not be empty!",
      }));
    }

    if (!isValidEmail(formInput.email)) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["email"]: "Invalid email address",
      }));
    }
    if (formInput.subject.length <= 0) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["subject"]: "Subject should not be empty!",
      }));
    }

    if (formInput.phone < 8) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["phone"]: "Invalid Phone",
      }));
    }

    if (formInput.message.length < 20) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["message"]: "Invalid Message, Type something more!",
      }));
    }

    if (check) {
      setLoading(false);
      return false;
    } 

    try {
      const data = await sendContactData(formInput);

      setFormInput({
        name: "",
        phone: "",
        subject: "",
        email: "",
        message: "",
      });
      setLoading(false);
;
      // setErrors(data);
      if (data.status) {
        setSuccessMessage(data.message);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors((prev) => ({
            ...prev,
            ["server_error"]: data.message,
          }));
        }
      }
    } catch (error) {
      console.log("error",error)

      // setErrors(error)
      // setErrors((prev) => ({
      //   ...prev,
      //   ["server_error"]: error.message,
      // }));
      setLoading(false);
    }
  };
  const isValidEmail = (email) => {
    // Check if email is in a valid format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={handleFormSubmit}
                >
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formInput.name}
                          onChange={handleInputChange}
                        />

                        <p className="contact_error">{errors.name}</p>
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          value={formInput.email}
                          onChange={handleInputChange}
                        />

                        <p className="contact_error">{errors.email}</p>
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          name="phone"
                          value={formInput.phone}
                          onChange={handleInputChange}
                        />

                        <p className="contact_error">{errors.phone}</p>
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={formInput.subject}
                          onChange={handleInputChange}
                        />

                        <p className="contact_error">{errors.subject}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      name="message"
                      value={formInput.message}
                      onChange={handleInputChange}
                    />

                    <p className="contact_error">{errors.message}</p>
                  </div>
                  <div
                    disabled={loading}
                    type="submit"
                    className="dizme_tm_button"
                    id="send_message"
                  >
                   <a><span> {loading ? "Loading..." : "Send Message"}</span> </a>
                  </div>
                  {successMessage && (
                    <div className="returnmessage">
                      <p>{successMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Ahmedabad=&z=13&ie=UTF8&iwloc=&output=embed" 
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
