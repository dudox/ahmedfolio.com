import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    sendMail(data);
    console.log("Message submited: " + JSON.stringify(data));
  };

  const sendMail = async (data, e) => {
    const res = await axios.post(
      `https://api.emailjs.com/api/v1.0/email/send`,
      {
        user_id: "user_gXK8mzwEAvfP6S2LTZ0vN",
        service_id: "service_rfwy1sh",
        template_id: "template_wjcdxue",
        template_params: data,
      }
    );

    if (res.status === 200) {
      success("Email Sent Successfully");
    }
  };

  const success = (message) => {
    toast.success(message, {
      className: css({
        background: "#00FF00 !important",
        color: "white !important",
        fontWeight: "bold"
      }),
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
     
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
