const Chapters = () => {
  const chapters = [
    {
      number: 1,
      title: "Information Flow is your Lifeblood",
      summary: "This foundational chapter establishes that information is the lifeblood of modern business, analogous to blood flowing through the human body. Gates argues that organizations must create seamless digital pathways for information to flow efficiently across all departments and levels. He introduces the digital nervous system concept and explains how real-time information access enables faster decision-making, improved customer service, and competitive advantages. The chapter demonstrates how companies that master information flow can respond to market changes with unprecedented speed and precision.",
    },
    {
      number: 2,
      title: "Commerce: The Internet",
      summary: "Gates explores how the internet fundamentally transforms commercial transactions and business relationships. This chapter examines the shift from traditional commerce to digital marketplaces, emphasizing how online platforms enable direct customer connections, reduce transaction costs, and create global reach for businesses of all sizes. Gates discusses how digital commerce tools provide unprecedented customer insights, enable personalized marketing, and create new revenue streams. The chapter presents a vision of frictionless commerce where buyers and sellers connect instantly, and transactions occur at the speed of thought.",
    },
    {
      number: 3,
      title: "Manage Knowledge to Improve",
      summary: "This chapter focuses on knowledge management as a critical competitive advantage. Gates explains how organizations can capture, organize, and leverage institutional knowledge through digital systems. He demonstrates how converting tacit knowledge into explicit, searchable formats enables continuous learning and innovation. The chapter covers best practices for creating knowledge repositories, facilitating collaboration, and ensuring that valuable insights and lessons learned are accessible to everyone in the organization. Gates emphasizes that effective knowledge management prevents reinventing the wheel and accelerates problem-solving.",
    },
    {
      number: 4,
      title: "Special Projects",
      summary: "Gates examines how digital tools revolutionize project management and collaborative work. This chapter presents case studies of organizations that successfully implemented digital project management systems to improve coordination, track progress, and deliver results faster. Gates discusses how digital platforms enable distributed teams to work together effectively, how real-time project visibility improves accountability, and how data-driven project management helps identify issues before they become critical problems. The chapter provides practical frameworks for managing complex initiatives in the digital age.",
    },
    {
      number: 5,
      title: "Expect the Unexpected",
      summary: "The final chapter addresses business resilience and adaptability in an unpredictable world. Gates argues that digital systems provide the agility needed to respond to unexpected challenges and opportunities. He discusses how real-time information access enables rapid response to crises, how scenario planning tools help anticipate potential disruptions, and how digital communication systems keep organizations coordinated during turbulent times. Gates emphasizes that the digital nervous system isn't just about efficiency—it's about survival and thriving in an increasingly volatile business environment.",
    },
  ];

  return (
    <section id="chapters" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Chapter <span className="text-brand-red">Breakdown</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:border-brand-blue/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center text-white font-bold text-2xl">
                    {chapter.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-blue">
                    Chapter {chapter.number}: {chapter.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{chapter.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;