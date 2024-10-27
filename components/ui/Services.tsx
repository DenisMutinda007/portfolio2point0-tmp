function Services() {
  return (
    <div id="services"className="max-w-full overflow-hidden flex flex-col content">
      <div className="text-center">
        <p className="text-4xl font-bold underline">Services</p>
        <section className="md:flex pt-3">
          <p className="md:w-1/4">
            We help ambitious businesses succeed by creating high-quality
            products, services, and digital experiences that exceed their
            customers&apos; expectations. This is achieved through generating
            more profits by building awereness, driving user traffic, connecting
            with customers and consequently increasing sales.
          </p>
          <div className="md:w-3/4">
            <p>Fullstack Web Development</p>
            <p>Cross-platform Mobile Development</p>
            <p>DevOps & Security</p>
            <p>Internet of Things & Automation</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
