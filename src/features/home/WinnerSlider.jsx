import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const winners = [
  
  {
    year: "2024",
    team: "India",
    image: "/winners/ind-2024.jpg",
  },
  {
    year: "2022",
    team: "England",
    image: "/winners/eng-2022.jpg",
  },
  {
    year: "2021",
    team: "Australia",
    image: "/winners/aus-2021.jpg",
  },
  {
    year: "2016",
    team: "West Indies",
    image: "/winners/wi-2016.jpg",
  },
  {
    year: "2014",
    team: "Sri Lanka",
    image: "/winners/sl-2014.jpg",
  },
  {
    year: "2012",
    team: "West Indies",
    image: "/winners/wi-2012.jpg",
  },
  {
    year: "2010",
    team: "England",
    image: "/winners/eng-2010.jpg",
  },
  {
    year: "2009",
    team: "Pakistan",
    image: "/winners/pak-2009.jpg",
  },
  {
    year: "2007",
    team: "India",
    image: "/winners/ind-2007.jpg",
  },
];

export default function WinnersSlider() {
  const settings = {
    dots:true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full pb-20">
      <div className="px-6 mb-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-semibold mt-4 px-6">
            Former Champions
          </h2>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-7xl">
          <Slider {...settings}>
            {winners.map((item, idx) => (
              <div key={idx} className="px-3">
                <div className="rounded-2xl bg-base-200 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300">
                  <div className="h-60 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.team}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <span className="text-sm opacity-60">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">
                      {item.team}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
