import billGatesImage from "@/assets/bill-gates.png";
import bookCoverImage from "@/assets/book-cover.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-brand-blue/20 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-brand-red/20 rotate-12" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bill Gates Image and Text */}
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-red opacity-20 blur-2xl" />
              <img
                src={billGatesImage}
                alt="Bill Gates"
                className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Business at the{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
                  Speed of Thought
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                by Bill Gates
              </p>
              <p className="text-lg text-foreground/80 max-w-xl">
                Using a Digital Nervous System to Transform Business Intelligence and Drive Success in the Digital Age
              </p>
            </div>
          </div>

          {/* Right Side - Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-brand-red/30 to-brand-blue/30 rounded-3xl blur-2xl" />
              <img
                src={bookCoverImage}
                alt="Business at the Speed of Thought Book Cover"
                className="relative w-80 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;