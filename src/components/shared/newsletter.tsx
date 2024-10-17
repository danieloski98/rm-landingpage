import React from "react";

export default function Newsletter() {
  return (
    <div className=" flex flex-col gap-1 relative z-10 text-secondary01 ">
      <div
        id="mc_embed_signup"
        className="flex flex-col gap-1 relative z-10 text-secondary01"
      >
        <h6 className="font-bold text-lg leading-[28px]">
          Stay updated with our newsletter
        </h6>
        <p className="text-sm leading-[22px] text-secondary02">Learn more about new events</p>
        <form
          action="https://club1040.us3.list-manage.com/subscribe/post?u=07e0e4691f28ae445bfce2160&amp;id=cbf8753dd3&amp;f_id=004b2ae2f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div className="flex gap-2 mt-3">
            <input
              type="email"
              name="EMAIL"
              className="w-full lg:w-[267px] h-[48px] border bg-dark01 border-[#919EAB52] outline-none rounded-lg px-4 bg-transparent text-sm leading-[22px]"
              id="mce-EMAIL"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="text-sm font-bold leading-[22px] text-secondary05 border-primary bg-primary h-[48px] px-4 rounded-[8px]"
            >
              Join
            </button>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_07e0e4691f28ae445bfce2160_cbf8753dd3"
              tabIndex={-1}
              value=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}
