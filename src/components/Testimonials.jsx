import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const testimonials = [
  {
    quote:
      'Mark is a highly skilled engineer and a great team player. His contributions were invaluable to our project.',
    author: 'John Doe',
    role: 'Tech Lead',
    image: '/test1.jpg',
  },
  {
    quote:
      "We were impressed with Mark's problem-solving abilities and his dedication to delivering high-quality code.",
    author: 'Jane Smith',
    role: 'Project Manager',
    image: '/test2.jpg',
  },
  {
    quote:
      'Mark is a proactive and reliable engineer who always goes the extra mile to ensure project success.',
    author: 'Peter Jones',
    role: 'CTO',
    image: '/test3.jpg',
  },
  {
    quote:
      'Working with Mark was a fantastic experience. His technical expertise and communication skills are top-notch.',
    author: 'Alice Brown',
    role: 'UI/UX Designer',
    image: '/test4.jpg',
  },
  {
    quote:
      'Mark consistently delivers high-quality work and is a valuable asset to any team. I highly recommend him.',
    author: 'Bob Williams',
    role: 'Product Owner',
    image: '/test5.jpg',
  },
  {
    quote:
      'His ability to grasp complex technical challenges and implement effective solutions is truly remarkable.',
    author: 'Carol Davis',
    role: 'QA Engineer',
    image: '/test3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 text-center shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300 flex flex-col items-center ">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 object-contain rounded-full mb-6 border-2 border-purple-500"
                />
                <p className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-purple-300 font-semibold text-lg">
                  - {testimonial.author}, {testimonial.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
