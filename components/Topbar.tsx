import { REGISTER_URL } from "@/lib/site";

export default function Topbar() {
  return (
    <div className="topbar" role="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src="/logo.png" className="logo" alt="Yaarwin" />
          </div>
          <div>
            <a href={REGISTER_URL} className="top-btn login-btn">
              Login
            </a>
            <a href={REGISTER_URL} className="top-btn register-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
