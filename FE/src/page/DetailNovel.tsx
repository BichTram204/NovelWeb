import React from "react";

export default function DetailNovel() {
  return (
    <div>
      <header className="header d-none d-lg-block">
        <nav className="navbar navbar-expand-lg navbar-dark header__navbar p-md-0">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="images/logo_text.png"
                alt="Logo Suu Truyen"
                className="img-fluid"
                style={{ width: "200px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Thể loại
                  </a>
                  <ul className="dropdown-menu dropdown-menu-custom">
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Ngôn Tình
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Trọng Sinh
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Cổ Đại
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Tiên Hiệp
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Ngược
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Khác
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Dị Giới
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Huyền Huyễn
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Xuyên Không
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Sủng
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Cung Đấu
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Gia Đấu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Theo số chương
                  </a>
                  <ul className="dropdown-menu dropdown-menu-custom">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dưới 100
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        100 - 500
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        500 - 1000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Trên 1000
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="form-check form-switch me-3 d-flex align-items-center">
                <label className="form-check-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-brightness-high"
                    viewBox="0 0 16 16"
                    style={{ fill: "#fff" }}
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                  </svg>
                </label>
                <input
                  className="form-check-input theme_mode"
                  type="checkbox"
                  style={{
                    transform: "scale(1.3)",
                    marginLeft: "12px",
                    marginRight: "12px",
                  }}
                />

                <label className="form-check-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 384 512"
                    style={{ fill: "#fff" }}
                  >
                    <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"></path>
                  </svg>
                </label>
              </div>

              <form
                className="d-flex header__form-search"
                action=""
                method="GET"
              >
                <input
                  className="form-control search-story"
                  type="text"
                  placeholder="Tìm kiếm"
                  name="key_word"
                  value=""
                />
                <div className="col-12 search-result shadow no-result d-none">
                  <div className="card text-white bg-light">
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush d-none">
                        <li className="list-group-item">
                          <a href="#" className="text-dark hover-title">
                            Tự cẩm
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button className="btn" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <div className="header-mobile d-sm-block d-lg-none">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img
                src="images/logo_text.png"
                alt="Logo Suu Truyen"
                className="img-fluid"
                style={{ width: "200px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark w-75"
              tabIndex={-1}
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <img
                  src="images/logo_text.png"
                  alt="Logo Suu Truyen"
                  className="img-fluid"
                  style={{ width: "200px" }}
                />
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-3">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="https://suustore.com/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Thể loại
                    </a>
                    <ul className="dropdown-menu dropdown-menu-custom">
                      <li>
                        <a className="dropdown-item" href="#">
                          Mạt Thế
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Xuyên Nhanh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Hệ Thống
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Nữ Cường
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="form-check form-switch d-flex align-items-center mb-3 p-0">
                  <label className="form-check-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-brightness-high"
                      viewBox="0 0 16 16"
                      style={{ fill: "#fff" }}
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                  </label>
                  <input
                    className="form-check-input theme_mode"
                    type="checkbox"
                    style={{
                      transform: "scale(1.3)",
                      marginLeft: "12px",
                      marginRight: "12px",
                    }}
                  />

                  <label className="form-check-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 384 512"
                      style={{ fill: "#fff" }}
                    >
                      <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"></path>
                    </svg>
                  </label>
                </div>

                <form
                  className="d-flex header__form-search"
                  action=""
                  method="GET"
                >
                  <input
                    className="form-control search-story"
                    type="text"
                    placeholder="Tìm kiếm"
                    name="key_word"
                    value=""
                  />
                  <div className="col-12 search-result shadow no-result d-none">
                    <div className="card text-white bg-light">
                      <div className="card-body p-0">
                        <ul className="list-group list-group-flush d-none">
                          <li className="list-group-item">
                            <a href="#" className="text-dark hover-title">
                              Tự cẩm
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button className="btn" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-light header-bottom">
        <div className="container py-1">
          <p className="mb-0">
            Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp
            đầy đủ và cập nhật liên tục.
          </p>
        </div>
      </div>

      <main>
        <input
          type="hidden"
          id="story_slug"
          value="nang-khong-muon-lam-hoang-hau"
        />
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md-7 col-lg-8">
              <div className="head-title-global d-flex justify-content-between mb-4">
                <div className="col-12 col-md-12 col-lg-4 head-title-global__left d-flex">
                  <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                    <span
                      className="d-block text-decoration-none text-dark fs-4 title-head-name"
                      title="Thông tin truyện"
                    >
                      Thông tin truyện
                    </span>
                  </h2>
                </div>
              </div>

              <div className="story-detail">
                <div className="story-detail__top d-flex align-items-start">
                  <div className="row align-items-start">
                    <div className="col-12 col-md-12 col-lg-3 story-detail__top--image">
                      <div className="book-3d">
                        <img
                          src="images/nang_khong_muon_lam_hoang_hau.jpg"
                          alt="Nàng Không Muốn Làm Hoàng Hậu"
                          className="img-fluid w-100"
                          width="200"
                          height="300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-9">
                      <h3 className="text-center story-name">
                        Nàng Không Muốn Làm Hoàng Hậu
                      </h3>
                      <div className="rate-story mb-2">
                        <div className="rate-story__holder" data-score="7.0">
                          <img alt="1" src="images/star-on.png" />

                          <img alt="2" src="images/star-on.png" />

                          <img alt="3" src="images/star-on.png" />

                          <img alt="4" src="images/star-on.png" />

                          <img alt="5" src="images/star-on.png" />

                          <img alt="6" src="images/star-on.png" />

                          <img alt="7" src="images/star-half.png" />

                          <img alt="8" src="images/star-off.png" />

                          <img alt="9" src="images/star-off.png" />

                          <img alt="10" src="images/star-off.png" />
                        </div>
                        <em className="rate-story__text"></em>
                        <div
                          className="rate-story__value"
                          itemProp="aggregateRating"
                          itemType="https://schema.org/AggregateRating"
                        >
                          <em>
                            Đánh giá:
                            <strong>
                              <span itemProp="ratingValue">7.0</span>
                            </strong>
                            /
                            <span className="" itemProp="bestRating">
                              10
                            </span>
                            từ
                            <strong>
                              <span itemProp="ratingCount">415</span>
                              lượt
                            </strong>
                          </em>
                        </div>
                      </div>

                      <div
                        className="story-detail__top--desc px-3"
                        style={{ maxHeight: "285px" }}
                      >
                        Phụ mẫu Vân Kiều mất sớm, một mình nàng tự buôn bán nhỏ,
                        còn nhặt được một thư sinh nghèo mi thanh mục tú về làm
                        phu quân, mỗi ngày trôi qua cũng có chút thú vị.
                        <br />
                        <br />
                        Sau này, khi phu quân nàng vào kinh đi thi, hắn bỗng
                        nhiên trở thành Thái tử tôn quý.
                        <br />
                        <br />
                        Ai ai cũng đều nói Vân Kiều nàng có phúc, ấy vậy mà lại
                        được gả cho hoàng tử lưu lạc ở dân gian. Song, Vân Kiều
                        lại cảm thấy vô cùng hụt hẫng.
                        <br />
                        <br />
                        Nàng không quen với cuộc sống cẩm y ngọc thực, cũng
                        không am hiểu cầm kỳ thi hoạ, phong hoa tuyết nguyệt,
                        thậm chí chữ viết cũng rất xấu. Hoa phục của Trung cung
                        mặc lên người nàng không hề giống một Hoàng Hậu.
                        <br />
                        <br />
                        Vân Kiều cẩn tuân lời dạy bảo của Thái hậu, học quy củ,
                        tuân thủ lễ nghi, không sân si, không đố kị, mãi đến khi
                        Bùi Thừa Tư tìm được bạch nguyệt quang trong lòng hắn.
                        Cuối cùng, nàng mới hiểu, hoá ra Bùi Thừa Tư cũng có thể
                        yêu một người đến vậy.
                        <br />
                        <br />
                        Ngày Bùi Thừa Tư sửa tên đổi họ cho bạch nguyệt quang đã
                        mất phu quân kia, cho nàng ta tiến cung phong phi, Vân
                        Kiều uống chén thuốc ph* thai làm mất đi hài tử mà chính
                        nàng đã mong đợi.
                        <br />
                        <br />
                        Đối mặt với cơn giận lôi đình của Bùi Thừa Tư, nàng
                        không màng đến vị trí Hoàng hậu, nàng muốn về lại trấn
                        Quế Hoa.
                        <br />
                        <br />
                        Nàng ghét phải nhìn bầu trời nhỏ hẹp trong cung cấm,
                        nàng muốn trở về thị trấn nhỏ, thiên hạ rộng lớn, hương
                        thơm tỏa khắp đất trời vào cuối thu.
                        <br />
                        <br />
                        Nàng cũng ghét nhìn thấy Bùi Thừa Tư.
                        <br />
                        <br />
                        Từ đầu tới cuối, nàng chỉ yêu chàng thư sinh áo xanh
                        phóng khoáng nọ, chỉ cần nhìn thoáng qua cũng thấy yêu
                        thích vô cùng. Tiếc là, từ lúc hắn rời trấn vào kinh,
                        hắn đã chết rồi.
                        <br />
                        <br />
                        Vai chính: Vân Kiều ┃ vai phụ: Những người còn lại.
                        <br />
                        <br />
                        Lập ý: Nếu ngươi vô tình vậy thì ta sẽ hưu.
                      </div>

                      <div className="info-more">
                        <div className="info-more--more active" id="info_more">
                          <span className="me-1 text-dark">Xem thêm</span>
                          <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.70749 7.70718L13.7059 1.71002C14.336 1.08008 13.8899 0.00283241 12.9989 0.00283241L1.002 0.00283241C0.111048 0.00283241 -0.335095 1.08008 0.294974 1.71002L6.29343 7.70718C6.68394 8.09761 7.31699 8.09761 7.70749 7.70718Z"
                              fill="#2C2C37"
                            ></path>
                          </svg>
                        </div>

                        <a
                          className="info-more--collapse text-decoration-none"
                          href="story.html#info_more"
                        >
                          <span className="me-1 text-dark">Thu gọn</span>
                          <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.70749 0.292817L13.7059 6.28998C14.336 6.91992 13.8899 7.99717 12.9989 7.99717L1.002 7.99717C0.111048 7.99717 -0.335095 6.91992 0.294974 6.28998L6.29343 0.292817C6.68394 -0.097606 7.31699 -0.0976055 7.70749 0.292817Z"
                              fill="#2C2C37"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="story-detail__bottom mb-3">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-3 story-detail__bottom--info">
                      <p className="mb-1">
                        <strong>Tác giả:</strong>
                        <a
                          href="#"
                          className="text-decoration-none text-dark hover-title"
                        >
                          Thâm Bích Sắc
                        </a>
                      </p>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <strong className="me-1">Thể loại:</strong>
                        <div className="d-flex align-items-center flex-warp">
                          <a
                            href="category.html"
                            className="text-decoration-none text-dark hover-title  me-1 "
                            style={{ width: "max-content" }}
                          >
                            Ngôn Tình ,
                          </a>

                          <a
                            href="category.html"
                            className="text-decoration-none text-dark hover-title  me-1 "
                            style={{ width: "max-content" }}
                          >
                            Cổ Đại ,
                          </a>

                          <a
                            href="category.html"
                            className="text-decoration-none text-dark hover-title  me-1 "
                            style={{ width: "max-content" }}
                          >
                            Ngược ,
                          </a>

                          <a
                            href="category.html"
                            className="text-decoration-none text-dark hover-title "
                            style={{ width: "max-content" }}
                          >
                            Khác{" "}
                          </a>
                        </div>
                      </div>

                      <p className="mb-1">
                        <strong>Trạng thái:</strong>
                        <span className="text-info">Full</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="story-detail__list-chapter">
                  <div className="head-title-global d-flex justify-content-between mb-4">
                    <div className="col-6 col-md-12 col-lg-4 head-title-global__left d-flex">
                      <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                        <span
                          className="d-block text-decoration-none text-dark fs-4 title-head-name"
                          title="Truyện hot"
                        >
                          Danh sách chương
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="story-detail__list-chapter--list">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-lg-6 story-detail__list-chapter--list__item">
                        <ul>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 1: Nàng không tin Yến Đình lại lừa nàng
                              chuyện lớn đến vậy!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 2: Ngũ hoàng tử bùi thừa tư trở về!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 3: Oan gia ngõ hẹp!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 4: Đây chính là thành trường an!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 5: Dám quấy nhiễu xa giá của điện hạ!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 6: Ngài thương yêu nàng, bao bọc nàng ấy
                              trong nhung lụa, không phải tốt hay sao?
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 7: Hoá ra ác nhân còn không biết xấu hổ đi
                              cáo trạng trước!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 8: Phu quân ngươi đâu? sao hắn không đến
                              cứu ngươi?
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 9: Ngươi vừa nói vân cô nương kia tên là
                              gì?
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 10: "sao bây giờ chàng mới đến tìm ta?”
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 11: Hoá ra chỉ có nàng là tự cho mình đúng!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 12: Hắn cúi người hôn lên môi nàng!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 13: Ai càng lún sâu vào tình ái thì người
                              ấy không thể làm được gì!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 14: Giống như nàng đang gấp gáp đòi danh
                              phận!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 15: Ngoan!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 16: Nghiêm khắc với nàng là muốn nàng được
                              tốt hơn!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 17: Năm đó ta và nàng kết tóc làm phu thê,
                              dù thế nào cũng không thay đổi!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 18: Phó dư!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 19: Có người không muốn để nàng yên ổn!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 20: Có phải uy hiếp hay không, quận chúa có
                              thể thử!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 21: Các nàng không canh chừng nàng cẩn
                              thận, đương nhiên sẽ bị phạt!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 22: Bùi thừa tư, rốt cuộc chàng xem ta là
                              gì?
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 23: Giam cầm và phong hậu!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 24: Ta sẽ không xem chàng quan trọng hơn
                              bản thân mình nữa!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 25: Ba lời hứa!
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-6 story-detail__list-chapter--list__item">
                        <ul>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 26: Mỹ nhân!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 27: Tài nữ uyên bác!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 28: Yến lang!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 29: Điều trị thân thể để dễ dàng mang thai!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 30: Vậy thì chàng hãy thu lại hậu vị này
                              đi!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 31: Giống như c**ng bức nàng!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 32: Ta biết trước giờ chàng vẫn thiên vị
                              ngu gia!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 33: A kiều, nàng thật biết cách chọc cho ta
                              tức giận!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 34: Dỗ hắn vui vẻ, để đạt được mục đích!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 35: Phó dư cũng đã đến tuổi nghị thân!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 36: Mang theo ý tứ “lấy sắc hầu người”!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 37: Có người muốn giết ta!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 38: Tấu sớ yêu cầu lấp đầy hậu cung!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 39: Đừng ở trong cung nữa!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 40: Nàng ta có thai!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 41: Thuốc hoa hồng để ph* thai!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 42: Chọn cách quyết liệt nhất để cắt đứt
                              với hắn!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 43: Ta ghét phải nhìn thấy ngươi!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 44: Ngươi sẽ đi lên vết xe đổ của tiên đế!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 45: Giữa ta và hắn, đã chú định là không có
                              kết quả!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 46: Giống như dính phải thứ gì đó dơ bẩn!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 47: Trần gia có một vị hoàng hậu đã qua
                              đời!
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 48: Thánh thượng không tuân theo quy củ nữa
                              sao?
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 49: Mê hương
                            </a>
                          </li>
                          <li>
                            <a
                              href="chapter.html"
                              className="text-decoration-none text-dark hover-title"
                            >
                              Chương 50: “thánh thượng không cần đại cục nữa
                              sao?”
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="pagination"
                  style={{ justifyContent: "center" }}
                >
                  <ul>
                    <li className="pagination__item  page-current">
                      <a
                        className="page-link story-ajax-paginate"
                        data-url="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau?page=1"
                        style={{ cursor: "pointer" }}
                      >
                        1
                      </a>
                    </li>
                    <li className="pagination__item ">
                      <a
                        className="page-link story-ajax-paginate"
                        data-url="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau?page=2"
                        style={{ cursor: "pointer" }}
                      >
                        2
                      </a>
                    </li>

                    <div className="dropup-center dropup choose-paginate me-1">
                      <button
                        className="btn btn-success dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Chọn trang
                      </button>
                      <div className="dropdown-menu">
                        <input
                          type="number"
                          className="form-control input-paginate me-1"
                          value=""
                        />
                        <button className="btn btn-success btn-go-paginate">
                          Đi
                        </button>
                      </div>
                    </div>

                    <li className="pagination__arrow pagination__item">
                      <a
                        data-url="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau?page=2"
                        style={{ cursor: "pointer" }}
                        className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center story-ajax-paginate"
                      >
                        &gt;&gt;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4 sticky-md-top">
              <div className="row top-ratings">
                <div className="col-12 top-ratings__tab mb-2">
                  <div
                    className="list-group d-flex flex-row"
                    id="list-tab"
                    role="tablist"
                  >
                    <a
                      className="list-group-item list-group-item-action active"
                      id="top-day-list"
                      data-bs-toggle="list"
                      href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-day"
                      role="tab"
                      aria-controls="top-day"
                      aria-selected="true"
                    >
                      Ngày
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="top-month-list"
                      data-bs-toggle="list"
                      href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-month"
                      role="tab"
                      aria-controls="top-month"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Tháng
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="top-all-time-list"
                      data-bs-toggle="list"
                      href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-all-time"
                      role="tab"
                      aria-controls="top-all-time"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      All time
                    </a>
                  </div>
                </div>
                <div className="col-12 top-ratings__content">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="top-day"
                      role="tabpanel"
                      aria-labelledby="top-day-list"
                    >
                      <ul>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-danger rounded-circle">
                              <span className="text-light">1</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/linh-vu-thien-ha"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Linh Vũ Thiên Hạ
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Huyền Huyễn ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/xuyen-khong"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Xuyên Không
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-success rounded-circle">
                              <span className="text-light">2</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/than-dao-dan-ton"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Thần Đạo Đan Tôn
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-info rounded-circle">
                              <span className="text-light">3</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/me-vo-khong-loi-ve"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Mê Vợ Không Lối Về
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/nguoc"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngược ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/sung"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Sủng
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">4</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đấu Phá Thương Khung
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">5</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/the-gioi-hoan-my"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Thế Giới Hoàn Mỹ
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/kiem-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Kiếm Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">6</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Cô Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất
                                Lương Có Chút Ngọt)
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/trong-sinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Trọng Sinh ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/sung"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Sủng
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">7</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Phàm Nhân Tu Tiên
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/kiem-hiep"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Kiếm Hiệp
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">8</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Nhất Niệm Vĩnh Hằng
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">9</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/de-ba"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đế Bá
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">10</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/re-quy-troi-cho"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Rể Quý Trời Cho
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/do-thi"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Đô Thị
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="top-month"
                      role="tabpanel"
                      aria-labelledby="top-month-list"
                    >
                      <ul>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-danger rounded-circle">
                              <span className="text-light">1</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/linh-vu-thien-ha"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Linh Vũ Thiên Hạ
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Huyền Huyễn ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/xuyen-khong"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Xuyên Không
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-success rounded-circle">
                              <span className="text-light">2</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/than-dao-dan-ton"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Thần Đạo Đan Tôn
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-info rounded-circle">
                              <span className="text-light">3</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/me-vo-khong-loi-ve"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Mê Vợ Không Lối Về
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/nguoc"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngược ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/sung"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Sủng
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">4</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đấu Phá Thương Khung
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">5</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/the-gioi-hoan-my"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Thế Giới Hoàn Mỹ
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/kiem-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Kiếm Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">6</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Cô Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất
                                Lương Có Chút Ngọt)
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/trong-sinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Trọng Sinh ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/sung"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Sủng
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">7</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Phàm Nhân Tu Tiên
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/kiem-hiep"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Kiếm Hiệp
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">8</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Nhất Niệm Vĩnh Hằng
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">9</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/de-ba"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đế Bá
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">10</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/re-quy-troi-cho"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Rể Quý Trời Cho
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/do-thi"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Đô Thị
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="top-all-time"
                      role="tabpanel"
                      aria-labelledby="top-all-time-list"
                    >
                      <ul>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-danger rounded-circle">
                              <span className="text-light">1</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/linh-vu-thien-ha"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Linh Vũ Thiên Hạ
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Huyền Huyễn ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/xuyen-khong"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Xuyên Không
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-success rounded-circle">
                              <span className="text-light">2</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/than-dao-dan-ton"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Thần Đạo Đan Tôn
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-info rounded-circle">
                              <span className="text-light">3</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đấu Phá Thương Khung
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/di-gioi"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Dị Giới ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">4</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Cô Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất
                                Lương Có Chút Ngọt)
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/ngon-tinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Ngôn Tình ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/trong-sinh"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Trọng Sinh ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/sung"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Sủng
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">5</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Phàm Nhân Tu Tiên
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/kiem-hiep"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Kiếm Hiệp
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">6</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Nhất Niệm Vĩnh Hằng
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">7</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/de-ba"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Đế Bá
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">8</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/vu-dong-can-khon"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Vũ Động Càn Khôn
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="rating-item d-flex align-items-center">
                            <div className="rating-item__number bg-light border rounded-circle">
                              <span className="text-dark">9</span>
                            </div>
                            <div className="rating-item__story">
                              <a
                                href="https://suustore.com/truyen/doc-ton-tam-gioi"
                                className="text-decoration-none hover-title rating-item__story--name text-one-row"
                              >
                                Độc Tôn Tam Giới
                              </a>
                              <div className="d-flex flex-wrap rating-item__story--categories">
                                <a
                                  href="https://suustore.com/the-loai/tien-hiep"
                                  className="text-decoration-none text-dark hover-title  me-1 "
                                >
                                  Tiên Hiệp ,
                                </a>
                                <a
                                  href="https://suustore.com/the-loai/huyen-huyen"
                                  className="text-decoration-none text-dark hover-title "
                                >
                                  Huyền Huyễn
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-list-category bg-light p-2 rounded card-custom">
                <div className="head-title-global mb-2">
                  <div className="col-12 col-md-12 head-title-global__left">
                    <h2 className="mb-0 border-bottom border-secondary pb-1">
                      <span
                        className="d-block text-decoration-none text-dark fs-4"
                        title="Truyện đang đọc"
                      >
                        Thể loại truyện
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <ul className="list-category">
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/ngon-tinh"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Ngôn Tình
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/trong-sinh"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Trọng Sinh
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/co-dai"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Cổ Đại
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/tien-hiep"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Tiên Hiệp
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/nguoc"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Ngược
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/khac"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Khác
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/di-gioi"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Dị Giới
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/huyen-huyen"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Huyền Huyễn
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/xuyen-khong"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Xuyên Không
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/sung"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Sủng
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/cung-dau"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Cung Đấu
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/gia-dau"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Gia Đấu
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/dien-van"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Điền Văn
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/do-thi"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Đô Thị
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/truyen-teen"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Truyện Teen
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/hai-huoc"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Hài Hước
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/kiem-hiep"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Kiếm Hiệp
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/dong-phuong"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Đông Phương
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/trinh-tham"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Trinh Thám
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/quan-truong"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Quan Trường
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/linh-di"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Linh Dị
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/dam-my"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Đam Mỹ
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/quan-su"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Quân Sự
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/khoa-huyen"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Khoa Huyễn
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/mat-the"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Mạt Thế
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/xuyen-nhanh"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Xuyên Nhanh
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/he-thong"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Hệ Thống
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://suustore.com/the-loai/nu-cuong"
                        className="text-decoration-none text-dark hover-title"
                      >
                        Nữ Cường
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="footer" className="footer border-top pt-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <strong>Suu Truyện</strong> -{" "}
              <a
                title="Đọc truyện online"
                className="text-dark text-decoration-none"
                href="#"
              >
                Đọc truyện
              </a>{" "}
              online một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy
              tính bảng.
            </div>
            <ul className="col-12 col-md-7 list-unstyled d-flex flex-wrap list-tag">
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
              <li className="me-1">
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="đam mỹ hài"
                  >
                    đam mỹ hài
                  </a>
                </span>
              </li>
              <li>
                <span className="badge text-bg-light">
                  <a
                    className="text-dark text-decoration-none"
                    href="#"
                    title="truyện xuyên nhanh"
                  >
                    truyện xuyên nhanh
                  </a>
                </span>
              </li>
            </ul>

            <div className="col-12">
              {" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderWidth: 0, marginBottom: 10 }}
                  src="images/88x31.png"
                />
              </a>
              <br />
              <p>
                Website hoạt động dưới Giấy phép truy cập mở{" "}
                <a
                  rel="license"
                  className="text-decoration-none text-dark hover-title"
                  href="http://creativecommons.org/licenses/by/4.0/"
                >
                  Creative Commons Attribution 4.0 International License
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
