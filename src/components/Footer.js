import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-8">
      <h2 className=" container sm:mx-auto text-3xl font-bold mb-4 main-title  mx-2">
        SUPER SUSHI
      </h2>
      <div className="container mx-2  sm:mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex-1 mx-2 sm:mx-0 w-full md:block md:ml-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.3846111174734!2d-123.10775927262658!3d49.2795566555875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671d65f5f6b47%3A0xf3e5c2d52d2b3489!2sKyonchan%20Chicken!5e0!3m2!1sen!2sjp!4v1637463984044!5m2!1sen!2sjp&markers=49.2795566555875,-123.10775927262658&hl=en&style=element:geometry|color:#212121&style=element:labels.icon|visibility:off&style=element:labels.text.fill|color:#757575&style=element:labels.text.stroke|color:#212121&style=feature:administrative.land_parcel|visibility:off&style=feature:administrative.neighborhood|visibility:off&style=feature:poi|visibility:off&style=feature:poi.park|visibility:off&style=feature:road|element:labels.text.fill|color:#9e9e9e&style=feature:road|element:labels.text.stroke|color:#ffffff&style=feature:road.arterial|visibility:off&style=feature:road.local|visibility:off&style=feature:transit|element:labels.text.fill|color:#757575&style=feature:water|element:geometry|color:#000000&style=feature:water|element:labels.text.fill|color:#ffffff"
            width="80%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col text-lg mb-3">
            <li className="mb-1">
              <p className="main-title">MONDAY</p>
              <p>CLOSED</p>
            </li>
            <li className="mb-2">
              <p className="main-title">TUESDAY - FRIDAY</p>
              <p> 11AM - 10PM</p>
            </li>

            <li className="mb-1">
              <p className="main-title">SATURDAY - SUNDAY</p>
              <p> 12AM - 10PM</p>
            </li>
          </ul>

          <div className="flex flex-col">
            <a href="tel:+1234567890" className="text-lg mb-3">
              📞 Tell: (123)-456-789
            </a>
            <a
              href="https://www.google.com/maps/place/Sushi+Den/@49.2794272,-123.11042,17z/data=!3m1!4b1!4m6!3m5!1s0x5486717ba45bc5eb:0x5af99b74cb6d92af!8m2!3d49.2794237!4d-123.1078451!16s%2Fg%2F12hk1dmkg?entry=ttu"
              className="text-lg mb-3"
            >
              📍 Addr:SUSHI Street Vancouver, BC, 123456
            </a>
            <a href="mailto:example@example.com" className="text-lg mb-1">
              ✉️ Email: SUSHI@example.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 SUPER SUSHI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
