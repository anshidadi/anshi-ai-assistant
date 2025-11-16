import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Sparkles, Code, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ai-blue to-ai-cyan bg-clip-text text-transparent">
              About Anshi AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A powerful AI assistant built to provide accurate, detailed, and professional responses to any question.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    The Creator
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Name:</span> Muhammad Anshid K T
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Age:</span> 17
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Role:</span> Creator & Developer of Anshi AI
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Brain className="h-5 w-5 text-accent" />
                    The Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anshi AI was created to provide an intelligent, accessible assistant that can help with any question or task. 
                    From coding to mathematics, from history to general knowledge, Anshi AI is designed to be your reliable 
                    companion in learning and problem-solving.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Capabilities
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Advanced natural language understanding and generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expert knowledge in programming, mathematics, and sciences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Detailed explanations and step-by-step problem solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Professional and friendly communication style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real-time streaming responses for better interaction</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    "Built with passion and powered by cutting-edge AI technology, Anshi AI represents 
                    the future of intelligent assistance."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;