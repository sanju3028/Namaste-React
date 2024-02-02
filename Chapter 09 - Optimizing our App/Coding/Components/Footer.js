// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/sanjaymakala/"
        target="_blank"
        title="Sanjay Makala's Linkedin Profile"
      >
        Sanjay Makala
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Feast<span>Finder</span>
        </strong>
    </div>
  );
};

export default Footer;
