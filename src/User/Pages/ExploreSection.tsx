import React from "react";
import "../../assets/User/css/ExploreSection.css";

const ExploreSection: React.FC = () => {
  return (
    <section className="explore-section">
      <div className="container">
        <h2>Khám phá những điểm đến gần đây</h2>
        <div className="destination-grid">
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp"
              alt="Thành phố Hồ Chí Minh"
            />
            <p>
              Thành phố Hồ Chí Minh
              <br />
              15 phút lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp"
              alt="Cần Thơ"
            />
            <p>
              Cần Thơ
              <br />3 giờ lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp"
              alt="Nha Trang"
            />
            <p>
              Nha Trang
              <br />
              6.5 giờ lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp"
              alt="Phú Quốc"
            />
            <p>
              Phú Quốc
              <br />
              7.5 giờ lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp"
              alt="Thành phố Tuy Hòa"
            />
            <p>
              Thành phố Tuy Hòa
              <br />
              7.5 giờ lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp"
              alt="Thành phố Biên Hòa"
            />
            <p>
              Thành phố Biên Hòa
              <br />
              45 phút lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp"
              alt="Thủ Dầu Một"
            />
            <p>
              Thủ Dầu Một
              <br />
              30 phút lái xe
            </p>
          </div>
          <div className="destination-item">
            <img
              src="https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp"
              alt="Thành phố Phan Rang - Tháp Chàm"
            />
            <p>
              Thành phố Phan Rang - Tháp Chàm
              <br />9 giờ lái xe
            </p>
          </div>
        </div>

        <h2>Ở bất cứ đâu</h2>
        <div className="stay-anywhere-grid">
          <div className="stay-anywhere-item">
            <img
              src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329222%2Fmjwqhra4wbzlvoo2pe27.jpg&w=1920&q=75"
              alt="Toàn bộ nhà"
            />
            <p>Toàn bộ nhà</p>
          </div>
          <div className="stay-anywhere-item">
            <img
              src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329186%2Ffmoml05qcd0yk2stvl9r.jpg&w=1920&q=75"
              alt="Chỗ ở độc đáo"
            />
            <p>Chỗ ở độc đáo</p>
          </div>
          <div className="stay-anywhere-item">
            <img
              src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329121%2Fguagj5r2bkccgr1paez3.jpg&w=1920&q=75"
              alt="Trang trại và thiên nhiên"
            />
            <p>Trang trại và thiên nhiên</p>
          </div>
          <div className="stay-anywhere-item">
            <img
              src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329252%2Fgqhtg9ua6jdrffhbrfv1.jpg&w=1920&q=75"
              alt="Cho phép mang theo thú cưng"
            />
            <p>Cho phép mang theo thú cưng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
