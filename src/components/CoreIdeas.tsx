import { Lightbulb, TrendingUp, Zap } from "lucide-react";

const CoreIdeas = () => {
  const mainIdeas = [
    {
      title: "The Digital Nervous System",
      description: "Gates introduces the concept of a digital nervous system as the foundation for modern business operations. This system integrates email, analytics, collaboration tools, and business processes into a unified digital infrastructure that enables real-time information flow. Just as the human nervous system coordinates bodily functions, a digital nervous system coordinates business activities, ensuring that the right information reaches the right people at the right time for optimal decision-making.",
    },
    {
      title: "Information Flow as Competitive Advantage",
      description: "The speed and quality of information flow directly determine a company's ability to compete in the digital age. Organizations that can gather, analyze, and act on information faster than their competitors gain significant market advantages. Gates argues that technology investments should focus on improving information velocity and accessibility, enabling faster response to customer needs, market changes, and operational challenges.",
    },
    {
      title: "Elimination of Paper-Based Processes",
      description: "Digital transformation requires fundamentally rethinking paper-based workflows. Gates demonstrates how digitizing processes doesn't just save time and reduce costs—it creates new possibilities for collaboration, analysis, and innovation. When information exists in digital form, it can be instantly shared, analyzed, and transformed, enabling business agility that paper-based systems can never achieve.",
    },
    {
      title: "Customer-Centric Digital Strategy",
      description: "Technology should primarily serve to improve customer relationships and experiences. Digital systems enable companies to gather detailed customer insights, personalize interactions, and respond rapidly to feedback. Gates emphasizes that successful digital transformation keeps customer value at the center, using technology to deepen customer understanding and strengthen relationships.",
    },
    {
      title: "Data-Driven Decision Making",
      description: "The digital nervous system empowers organizations to make decisions based on comprehensive, real-time data rather than intuition or outdated reports. By providing executives and managers with instant access to business metrics, market intelligence, and operational data, companies can respond proactively to opportunities and challenges. Gates demonstrates how digital tools transform decision-making from a periodic activity into a continuous, informed process.",
    },
  ];

  const professionalTakeaways = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technology is a Strategic Tool, Not Just Infrastructure",
      description: "The most valuable lesson is viewing technology as a strategic enabler rather than merely operational infrastructure. Digital systems should be designed to provide competitive advantages, improve decision-making, and create new business opportunities—not just automate existing processes.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Speed of Information Flow Determines Success",
      description: "In professional practice, prioritizing information velocity has proven transformative. Implementing systems that reduce the time between data collection and decision-making—whether through dashboards, automated reports, or real-time alerts—directly impacts organizational responsiveness and competitive positioning.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation Requires Cultural Change",
      description: "Technical implementation is only half the challenge; the other half is organizational culture. Successfully applying Gates' principles requires fostering a culture that embraces data-driven decision-making, continuous learning, and adaptability. Leaders must champion these changes and model the behaviors they wish to see throughout the organization.",
    },
  ];

  return (
    <section id="insights" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Core Ideas and <span className="text-brand-blue">Professional Insights</span>
        </h2>

        {/* Main Ideas */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-brand-red">Main Ideas</h3>
          <div className="space-y-8">
            {mainIdeas.map((idea, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold mb-3 text-brand-blue">{idea.title}</h4>
                <p className="text-foreground/80 leading-relaxed">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Takeaways */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-brand-red">
            Valuable Professional Takeaways
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {professionalTakeaways.map((takeaway, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-brand-blue mb-4">{takeaway.icon}</div>
                <h4 className="text-xl font-bold mb-3">{takeaway.title}</h4>
                <p className="text-foreground/80 leading-relaxed">{takeaway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreIdeas;