import { User, Calendar, Bell, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreFeatures() {
  const features = [
    {
      icon: <User className="h-8 w-8 text-roamio-blue" />,
      title: "Student Profile",
      description: "Select interests and optionally your schedule",
    },
    {
      icon: <Calendar className="h-8 w-8 text-roamio-blue" />,
      title: "Smart Event Feed",
      description: "See what matches you today",
    },
    {
      icon: <Bell className="h-8 w-8 text-roamio-blue" />,
      title: "Real-Time Nudges",
      description: "Get notified when something relevant is nearby",
    },
    {
      icon: <MapPin className="h-8 w-8 text-roamio-blue" />,
      title: "Map Navigation",
      description: "One tap to launch Google Maps and go",
    },
  ]

  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Card key={index} className="border border-slate-200 rounded-xl">
          <CardHeader className="pb-2">
            <div className="mb-2">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
