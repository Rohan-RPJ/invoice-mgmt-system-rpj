import {
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const Footer = () => {
  const LinkedInLogo = "./images/linkedin-logo.svg";
  const TwitterLogo = "./images/twitter-logo.svg";
  const FacebookLogo = "./images/facebook-logo.svg";
  return (
    <>
      <div
        className={`relative w-full h-[800px] sm:h-[442px] bg-[#7962bd] pt-10 sm:pt-10 overflow-hidden`}
      >
        <div
          className={`w-full h-full absolute bottom-0 sm:px-32 bg-[#7962bd]`}
        >
          <Image
            src={"./images/stats-desktop.png"}
            width={20}
            height={20}
            unoptimized={true}
            className={`h-[820px] sm:h-full w-full bg-[#7962bd] object-cover`}
            alt=""
          />
        </div>

        <div
          className={`w-full h-full absolute flex flex-col items-center gap-4 pl-[23%] sm:pl-[254px] sm:pr-[130px] pt-1 sm:pt-[28px]`}
        >
          <div
            className={`w-full flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-0 text-white`}
          >
            {[
              {
                p1: "Trusted by",
                p2: "43 Crore",
                p3: "Registered Users",
              },
              {
                p1: "Accepted all over",
                p2: "India",
                p3: "",
              },
              {
                p1: "Accepted at",
                p2: "~3.5 Crore",
                p3: "Stores",
              },
            ].map(({ p1, p2, p3 }, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col items-start whitespace-nowrap`}
                >
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p1}
                  </p>
                  <p className={`opacity-90 text-5xl font-semibold`}>{p2}</p>
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p3}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className={`w-full flex flex-col sm:flex-row gap-7 sm:gap-4 items-start sm:items-center justify-between sm:pr-48 opacity-90 text-white pt-6 sm:pl-2`}
          >
            <div
              className={`hidden sm:block opacity-80 text-[1.625rem] font-medium whitespace-nowrap`}
            >
              <p>Get the latest data trends and insights on PhonePe Pulse!</p>
            </div>
            <div
              className={`w-full flex flex-col items-start justify-start sm:hidden opacity-80 text-[1.625rem] font-medium whitespace-nowrap`}
            >
              <p>Get the latest data</p>
              <p>trends and insights</p>
              <p>on PhonePe Pulse!</p>
            </div>
            <button
              className={`border-2 border-[#4cdeff] px-6 sm:px-8 py-1.5 rounded-full`}
            >
              <span className={`text-md sm:text-lg whitespace-nowrap`}>
                Explore Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={`w-full h-full pt-16 sm:pt-20 pb-2 sm:pl-40 sm:pr-32`}>
        <div
          className={`w-full h-full flex flex-wrap sm:flex-nowrap items-start justify-start sm:pl-2`}
        >
          <div
            className={`h-full flex flex-col items-start justify-start pl-6 sm:pl-0`}
          >
            <Image
              src={"./images/logo.svg"}
              unoptimized={true}
              width={160}
              height={160}
              alt="Logo"
              className={`pt-3 sm:pt-0 w-[140px] sm:w-[160px]`}
            />
          </div>

          <div
            className={`w-full flex flex-wrap sm:flex-nowrap items-start justify-start pt-10 sm:pt-3`}
          >
            <div
              className={`w-full flex flex-wrap sm:flex-nowrap items-start justify-between pl-4 sm:pl-20`}
            >
              {[
                {
                  p1: "General",
                  p2: "About Us",
                  p3: "Business Solutions",
                  p4: "Report Vulnerability",
                  p5: "Merchant Partners",
                  p6: "",
                  p7: "© 2022, All rights reserved",
                },
                {
                  p1: "Connect",
                  p2: "Careers",
                  p3: "Contact us",
                  p4: "Ethics",
                  p5: "Blog",
                  p6: "",
                  p7: "",
                },
                {
                  p1: "Legal",
                  p2: "Terms & Conditions",
                  p3: "Privacy Policy",
                  p4: "Grievance Policy",
                  p5: "How to Pay",
                  p6: "E-Waste Policy",
                  p7: "",
                },
              ].map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`w-1/2 sm:w-full flex flex-col items-start gap-3.5 text-sm text-black font-light pl-2 ${
                      (index === 1 && "sm:pl-16") || (index == 2 && "sm:pl-0")
                    } pb-8 sm:pb-0`}
                  >
                    <p className={`font-bold pb-4`}>{data.p1}</p>
                    <p className={``}>{data.p2}</p>
                    <p className={``}>{data.p3}</p>
                    <p className={`flex items-center gap-1`}>
                      {data.p4}{" "}
                      {index === 1 && (
                        <ArrowTopRightOnSquareIcon
                          width={14}
                          className={`opacity-80`}
                        />
                      )}
                    </p>
                    <p className={``}>{data.p5}</p>
                    <p className={``}>{data.p6}</p>
                    <p className={`hidden sm:block`}>{data.p7}</p>
                  </div>
                );
              })}

              <div
                className={`w-1/2 sm:w-full flex flex-col items-start gap-4 pr-14`}
              >
                <p className={`pb-2 font-bold text-sm`}>Certification</p>
                <div className={`w-full flex items-end justify-start gap-1`}>
                  <Image
                    src={"./images/sisa.png"}
                    unoptimized={true}
                    width={112}
                    height={112}
                    alt=""
                  />

                  <ArrowTopRightOnSquareIcon
                    width={14}
                    className={`pb-2 text-black opacity-80`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`w-full sm:w-auto flex flex-col items-center sm:items-start gap-6 sm:mr-20`}
            >
              <p className={`text-sm font-bold`}>See All Apps</p>

              <button
                className={`uppercase whitespace-nowrap text-sm sm:text-base font-[650] sm:font-semibold py-2 px-3 sm:px-3 border-[3px] border-black rounded-xl sm:rounded-2xl`}
              >
                Download Now
              </button>

              <div
                className={`py-2 sm:py-8 w-full flex items-center justify-center sm:justify-between gap-10 sm:gap-0`}
              >
                {[LinkedInLogo, TwitterLogo, FacebookLogo].map(
                  (Logo, index) => {
                    return (
                      <Image
                        key={index}
                        src={Logo}
                        unoptimized={true}
                        alt=""
                        width={20}
                        height={20}
                        className={`w-[5%] sm:w-auto`}
                      />
                    );
                  }
                )}
              </div>

              <button
                className={`bg-[#5E269F] w-[90%] flex sm:hidden items-center justify-center rounded-full gap-6 py-2.5 shadow-lg shadow-[#5E269F]/20`}
              >
                <ArrowDownTrayIcon className={`w-6 h-5 text-white`} />
                <span className={`text-white text-lg font-medium`}>
                  Get the app
                </span>
              </button>
            </div>
          </div>

          <p
            className={`w-full text-center text-md text-black font-light sm:hidden pt-6`}
          >
            © 2022, All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
