import Image from "next/image";

export default function Footer() {
  return (
    <footer className="ms-container">
      <h5>Mani on social media:</h5>
      <div className="footer-links">
        <a
          href="https://github.com/ManiShah7"
          className="footer-links__social"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/static/img/github.png"
            alt="GitHub Link"
            width={40}
            height={34}
          />
        </a>
      </div>
    </footer>
  );
}
