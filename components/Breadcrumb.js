import Link from "next/link";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/Contactus.png")', 
        backgroundColor: "#D7D7D7"
      }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">
            {pageTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
