import { User, Calendar, MapPin } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <User className="h-10 w-10 text-roamio-blue" />,
      title: "Create your student profile",
      description: "Select your interests and optionally add your class schedule",
    },
    {
      icon: <Calendar className="h-10 w-10 text-roamio-blue" />,
      title: "Get matched with nearby events",
      description: "Discover events that align with your interests and availability",
    },
    {
      icon: <MapPin className="h-10 w-10 text-roamio-blue" />,
      title: "Tap to RSVP and go",
      description: "One-tap RSVP and directions to get you there on time",
    },
  ]

  return (
    <div className="grid gap-8 mt-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-roamio-blue/10">{step.icon}</div>
          <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
          <p className="mt-2 text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
