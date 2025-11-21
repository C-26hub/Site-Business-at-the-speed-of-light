const Footer = () => {
  return (
    <footer className="py-12 bg-tech-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
            Business at the Speed of Thought
          </h3>
          <p className="text-white/70">
            by Bill Gates
          </p>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Book Presentation Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;