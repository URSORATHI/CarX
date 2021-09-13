import React from "react";

const Login = () => {
  return (
    <div>
      <section id="login">
        <div className="container-lg my-5">
          <div className="text-center">
            <h2>LOGIN</h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <label htmlFor="email" className="form-label float-start">
                    Email address:
                  </label>
                  <div className="mb-4 input-group">
                    <span className="input-group-text">
                      <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="e.g. carx@example.com"
                    />
                  </div>

                  <label htmlFor="password" className="form-label float-start">
                    Password:
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i class="bi bi-eye-slash-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="********"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-secondary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
