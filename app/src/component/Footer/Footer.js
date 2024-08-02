
export default function Footer(){


return <div>
<footer className="page-footer font-small bg-dark pt-5">
  {/* Footer Elements */}
  <div className="container">
    {/* Social buttons */}
    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <a
          className="btn-floating btn-fb mx-1"
          href="https://www.facebook.com/UAB-Interkodas-1882309422025359/"
        >
          <img
            alt="fb"
            width={30}
            src="https://e7.pngegg.com/pngimages/213/828/png-clipart-facebook-logo-facebook-messenger-logo-social-media-icon-facebook-icon-blue-text.png"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="btn-floating btn-tw mx-1">
          <img
            alt="linkedin"
            width={30}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lx7QSChkwS08CoTPBff9mhsAk7VebysLSQ&s"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="btn-floating btn-gplus mx-1">
          <img
            alt="google_plus"
            width={30}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZe959A2vEW-fM04dy_p4-xpUqTEEu48Fibw&s"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="btn-floating btn-li mx-1">
          <img
            alt="google_maps"
            width={30}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNke4dXAF9n9RROOv7F4hgxNvfpI7xdTdzpw&s"
          />
        </a>
      </li>
    </ul>
    {/* Social buttons */}
  </div>
  {/* Footer Elements */}
  {/* Copyright */}
  <div className="footer-copyright text-center text-light py-3">
    © 2020 Copyright: All rights reserved.
  </div>
  {/* Copyright */}
</footer>


</div>


}