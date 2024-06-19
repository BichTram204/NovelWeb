import React from "react";

export default function Homepage() {
  return (
    <div className="App">
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
                    marginRight: " 12px",
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
                  // value=""
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
        <div className="section-stories-hot mb-3">
          <div className="container">
            <div className="row">
              <div className="head-title-global d-flex justify-content-between mb-2">
                <div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
                  <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                    <a
                      href="#"
                      className="d-block text-decoration-none text-dark fs-4 story-name"
                      title="Truyện Hot"
                    >
                      Truyện Hot
                    </a>
                  </h2>
                  <i className="fa-solid fa-fire-flame-curved"></i>
                </div>

                <div className="col-4 col-md-3 col-lg-2">
                  <select
                    className="form-select select-stories-hot"
                    aria-label="Truyen hot"
                  >
                    <option>Tất cả</option>
                    <option value="1">Ngôn Tình</option>
                    <option value="2">Trọng Sinh</option>
                    <option value="3">Cổ Đại</option>
                    <option value="4">Tiên Hiệp</option>
                    <option value="5">Ngược</option>
                    <option value="6">Khác</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="section-stories-hot__list">
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/tu_cam.jpg"
                          alt="Tự Cẩm"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Tự Cẩm
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/ngao_the_dan_than.jpg"
                          alt="Ngạo Thế Đan Thần"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Ngạo Thế Đan Thần
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/nang_khong_muon_lam_hoang_hau.jpg"
                          alt="Nàng Không Muốn Làm Hoàng Hậu"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Nàng Không Muốn Làm Hoàng Hậu
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/kieu_sung_vi_thuong.jpg"
                          alt="Kiều Sủng Vi Thượng"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Kiều Sủng Vi Thượng
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/linh_vu_thien_ha.jpg"
                          alt="Linh Vũ Thiên Hạ"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Linh Vũ Thiên Hạ
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/anh_dao_ho_phach.jpg"
                          alt="Anh Đào Hổ Phách"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Anh Đào Hổ Phách
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/than_dao_dan_ton.jpg"
                          alt="Thần Đạo Đan Tôn"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Thần Đạo Đan Tôn
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/cuoi_truoc_yeu_sau_mong_tieu_nhi.jpg"
                          alt="Cưới Trước Yêu Sau - Mộng Tiêu Nhị"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Cưới Trước Yêu Sau - Mộng Tiêu Nhị
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a
                      href="story.html"
                      className="d-block text-decoration-none"
                    >
                      <div className="story-item__image">
                        <img
                          src="images/me_dam.jpg"
                          alt="Mê Đắm"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Mê Đắm
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/khong_phu_the_duyen.jpg"
                          alt="Không Phụ Thê Duyên"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Không Phụ Thê Duyên
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/diu_dang_tan_xuong.jpg"
                          alt="Dịu Dàng Tận Xương"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Dịu Dàng Tận Xương
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/vo_chong_sieu_sao_hoi_ngot.jpg"
                          alt="Vợ Chồng Siêu Sao Hơi Ngọt"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Vợ Chồng Siêu Sao Hơi Ngọt
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/that_u_that_u_phai_la_hong_phai_xanh_tham.jpg"
                          alt="Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/thieu_tuong_vo_ngai_noi_gian_roi.jpg"
                          alt="Thiếu Tướng, Vợ Ngài Nổi Giận Rồi"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Thiếu Tướng, Vợ Ngài Nổi Giận Rồi
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/cung_chieu_vo_nho_troi_ban.jpg"
                          alt="Cưng Chiều Vợ Nhỏ Trời Ban"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Cưng Chiều Vợ Nhỏ Trời Ban
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="story-item">
                    <a href="#" className="d-block text-decoration-none">
                      <div className="story-item__image">
                        <img
                          src="images/thien_huong_nguoi_mu_liec_mat_dua_tinh.jpg"
                          alt="Thiên Hướng Người Mù, Liếc Mắt Đưa Tình"
                          className="img-fluid"
                          width="150"
                          height="230"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="story-item__name text-one-row story-name">
                        Thiên Hướng Người Mù, Liếc Mắt Đưa Tình
                      </h3>

                      <div className="list-badge">
                        <span className="story-item__badge badge text-bg-success">
                          Full
                        </span>

                        <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
                          Hot
                        </span>

                        <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="section-stories-hot__list wrapper-skeleton d-none">
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: " 100%",
                      height: "230px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md-8 col-lg-9">
              <div className="section-stories-new mb-3">
                <div className="row">
                  <div className="head-title-global d-flex justify-content-between mb-2">
                    <div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
                      <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                        <a
                          href="https://suustore.com/#"
                          className="d-block text-decoration-none text-dark fs-4 story-name"
                          title="Truyện Mới"
                        >
                          Truyện Mới
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="section-stories-new__list">
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Kiếm Động Cửu Thiên
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 1149
                          </a>
                        </div>
                      </div>
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: " 10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Tinh Thần Biến
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 671
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Linh Vũ Thiên Hạ
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Huyền Huyễn,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 5024
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Kiếm Động Cửu Thiên
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 1149
                          </a>
                        </div>
                      </div>
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Tinh Thần Biến
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 671
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Linh Vũ Thiên Hạ
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Huyền Huyễn,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 5024
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Kiếm Động Cửu Thiên
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 1149
                          </a>
                        </div>
                      </div>
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Tinh Thần Biến
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 671
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Linh Vũ Thiên Hạ
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Huyền Huyễn,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 5024
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Kiếm Động Cửu Thiên
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 1149
                          </a>
                        </div>
                      </div>
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Tinh Thần Biến
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 671
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Linh Vũ Thiên Hạ
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Huyền Huyễn,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 5024
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Kiếm Động Cửu Thiên
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 1149
                          </a>
                        </div>
                      </div>
                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Tinh Thần Biến
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Kiếm Hiệp
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 671
                          </a>
                        </div>
                      </div>

                      <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                          <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                              style={{ width: "10px", marginRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                            <a
                              href="#"
                              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                              Linh Vũ Thiên Hạ
                            </a>
                          </h3>
                          <span className="badge text-bg-info text-light me-1">
                            New
                          </span>

                          <span className="badge text-bg-success text-light me-1">
                            Full
                          </span>

                          <span className="badge text-bg-danger text-light">
                            Hot
                          </span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                          <p className="mb-0">
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Tiên Hiệp,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Dị Giới,
                            </a>
                            <a
                              href="#"
                              className="hover-title text-decoration-none text-dark category-name"
                            >
                              Huyền Huyễn,
                            </a>
                          </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                          <a
                            href="#"
                            className="hover-title text-decoration-none text-info"
                          >
                            Chương 5024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 sticky-md-top">
              <div className="row">
                <div className="col-12">
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
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Ngôn Tình
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Trọng Sinh
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Cổ Đại
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Tiên Hiệp
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Ngược
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Khác
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Dị Giới
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Huyền Huyễn
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Xuyên Không
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Sủng
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Cung Đấu
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Gia Đấu
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Điền Văn
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Đô Thị
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Truyện Teen
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Hài Hước
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Kiếm Hiệp
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Đông Phương
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Trinh Thám
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Quan Trường
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Linh Dị
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Đam Mỹ
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Quân Sự
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Khoa Huyễn
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Mạt Thế
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Xuyên Nhanh
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            className="text-decoration-none text-dark hover-title"
                          >
                            Hệ Thống
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
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
          </div>
        </div>

        <div className="section-stories-full mb-3 mt-3">
          <div className="container">
            <div className="row">
              <div className="head-title-global d-flex justify-content-between mb-2">
                <div className="col-12 col-md-4 head-title-global__left d-flex">
                  <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                    <span
                      className="d-block text-decoration-none text-dark fs-4 title-head-name"
                      title="Truyện đã hoàn thành"
                    >
                      Truyện đã hoàn thành
                    </span>
                  </h2>
                  <i className="fa-solid fa-fire-flame-curved"></i>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="section-stories-full__list">
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/tu_cam.jpg"
                        alt="Tự Cẩm"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Tự Cẩm
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 836 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/ngao_the_dan_than.jpg"
                        alt="Ngạo Thế Đan Thần"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Ngạo Thế Đan Thần
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 3808 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/nang_khong_muon_lam_hoang_hau.jpg"
                        alt="Nàng Không Muốn Làm Hoàng Hậu"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Nàng Không Muốn Làm Hoàng Hậu
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 80 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/kieu_sung_vi_thuong.jpg"
                        alt="Kiều Sủng Vi Thượng"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Kiều Sủng Vi Thượng
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 81 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/linh_vu_thien_ha.jpg"
                        alt="Linh Vũ Thiên Hạ"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Linh Vũ Thiên Hạ
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 5024 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/anh_dao_ho_phach.jpg"
                        alt="Anh Đào Hổ Phách"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Anh Đào Hổ Phách
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 93 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/cuoi_truoc_yeu_sau_mong_tieu_nhi.jpg"
                        alt="Cưới Trước Yêu Sau - Mộng Tiêu Nhị"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Cưới Trước Yêu Sau - Mộng Tiêu Nhị
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 96 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/me_dam.jpg"
                        alt="Mê Đắm"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Mê Đắm
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 118 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/khong_phu_the_duyen.jpg"
                        alt="Không Phụ Thê Duyên"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Không Phụ Thê Duyên
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 177 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/diu_dang_tan_xuong.jpg"
                        alt="Dịu Dàng Tận Xương"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Dịu Dàng Tận Xương
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 108 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/vo_chong_sieu_sao_hoi_ngot.jpg"
                        alt="Vợ Chồng Siêu Sao Hơi Ngọt"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Vợ Chồng Siêu Sao Hơi Ngọt
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 100 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/that_u_that_u_phai_la_hong_phai_xanh_tham.jpg"
                        alt="Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 229 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/thien_huong_nguoi_mu_liec_mat_dua_tinh.jpg"
                        alt="Thiên Hướng Người Mù, Liếc Mắt Đưa Tình"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Thiên Hướng Người Mù, Liếc Mắt Đưa Tình
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 70 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/hat_de_va_chanel.jpg"
                        alt="Hạt Dẻ Và Chanel"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Hạt Dẻ Và Chanel
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 6 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/em_anh_va_chung_ta.jpg"
                        alt="Em, Anh Và Chúng Ta"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Em, Anh Và Chúng Ta
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 105 chương
                    </span>
                  </div>
                  <div className="story-item-full text-center">
                    <a href="#" className="d-block story-item-full__image">
                      <img
                        src="images/me_vo_khong_loi_ve.jpg"
                        alt="Mê Vợ Không Lối Về"
                        className="img-fluid w-100"
                        width="150"
                        height="230"
                        loading="lazy"
                      />
                    </a>
                    <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                      <a
                        href="#"
                        className="text-decoration-none text-one-row story-name"
                      >
                        Mê Vợ Không Lối Về
                      </a>
                    </h3>
                    <span className="story-item-full__badge badge text-bg-success">
                      Full - 1845 chương
                    </span>
                  </div>
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
              <strong>Suu Truyện</strong> -
              <a
                title="Đọc truyện online"
                className="text-dark text-decoration-none"
                href="#"
              >
                Đọc truyện
              </a>
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
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderWidth: 0, marginBottom: "10px" }}
                  src="images/88x31.png"
                />
              </a>
              <br />
              <p>
                Website hoạt động dưới Giấy phép truy cập mở
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
