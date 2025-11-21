import { User } from "lucide-react";

const Team = () => {
  const team = [
    { name: "Team Member 1", role: "Presentation Lead" },
    { name: "Team Member 2", role: "Research Coordinator" },
    { name: "Team Member 3", role: "Content Developer" },
    { name: "Team Member 4", role: "Visual Designer" },
    { name: "Team Member 5", role: "Technical Analyst" },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Presentation <span className="text-brand-blue">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 hover:border-brand-blue/50"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;