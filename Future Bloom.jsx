import { useState } from 'react'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, RadioGroup, RadioGroupItem, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "/components/ui"
import { MapPin, User, Home, Clock, Users, Shield, Star, Plus, Edit, Trash, Calendar, BookOpen, Garden, DollarSign, Leaf, Share, Database, Car, Truck, MessageCircle, Check, X, Stethoscope, Flask, Package, Clock2, Users2, School, UserPlus } from "lucide-react"

type Resource = {
  id: number
  name: string
  type: 'food-bank' | 'shelter' | 'meal-program' | 'food-recovery' | 'mobile-pantry' | 'healthcare'
  location: { lat: number, lng: number }
  freeForPoor: boolean
}

type User = {
  id: number
  name: string
  email: string
  needs: string[]
  points: number
}

type Partner = {
  id: number
  name: string
  description: string
}

type Event = {
  id: number
  name: string
  date: string
  description: string
}

type Workshop = {
  id: number
  name: string
  date: string
  description: string
  type: 'cooking' | 'gardening' | 'budgeting' | 'canning' | 'fermentation'
}

type ResourceLink = {
  id: number
  name: string
  url: string
}

type Feedback = {
  id: number
  user: string
  message: string
}

type TimeBankTransaction = {
  id: number
  user: string
  service: string
  credits: number
}

type SkillSwapEvent = {
  id: number
  name: string
  date: string
  description: string
}

type StudentVolunteerProgram = {
  id: number
  name: string
  description: string
}

const initialResources: Resource[] = [
  { id: 1, name: 'City Food Bank', type: 'food-bank', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 2, name: 'Safe Haven Shelter', type: 'shelter', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 3, name: 'Community Meal Program', type: 'meal-program', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 4, name: 'Food Recovery Program', type: 'food-recovery', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 5, name: 'Mobile Food Pantry', type: 'mobile-pantry', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 6, name: 'Free Health Clinic', type: 'healthcare', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
  { id: 7, name: 'Community Health Center', type: 'healthcare', location: { lat: 37.7749, lng: -122.4194 }, freeForPoor: true },
]

const initialUser: User = {
  id: 0,
  name: '',
  email: '',
  needs: [],
  points: 0,
}

const initialPartners: Partner[] = [
  { id: 1, name: 'Sustainable Living Group', description: 'Promotes sustainable living and provides fresh produce.' },
  { id: 2, name: 'Local Farm', description: 'Provides surplus food from local farms.' },
]

const initialEvents: Event[] = [
  { id: 1, name: 'Food Drive', date: '2023-10-15', description: 'Join us for a community food drive to help those in need.' },
  { id: 2, name: 'Awareness Event', date: '2023-11-01', description: 'Learn more about food insecurity and how you can help.' },
]

const initialWorkshops: Workshop[] = [
  { id: 1, name: 'Cooking with Leftovers', date: '2023-10-20', description: 'Learn how to cook delicious meals using leftovers.', type: 'cooking' },
  { id: 2, name: 'Gardening Basics', date: '2023-11-05', description: 'Discover how to grow food at home, even in small spaces.', type: 'gardening' },
  { id: 3, name: 'Budgeting for Healthy Meals', date: '2023-11-10', description: 'Learn how to budget and plan healthy meals.', type: 'budgeting' },
  { id: 4, name: 'Canning and Preserving Classes', date: '2023-11-15', description: 'Learn how to can and preserve food to extend its shelf life.', type: 'canning' },
  { id: 5, name: 'Fermentation Workshops', date: '2023-11-20', description: 'Introduce users to fermentation as a method of food preservation.', type: 'fermentation' },
]

const initialResourceLinks: ResourceLink[] = [
  { id: 1, name: 'Community Supported Agriculture (CSA)', url: 'https://example.com/csa' },
  { id: 2, name: 'Local Food Co-op', url: 'https://example.com/food-coop' },
  { id: 3, name: 'Sustainable Living Group', url: 'https://example.com/sustainable-living' },
]

const initialFeedbacks: Feedback[] = [
  { id: 1, user: 'John Doe', message: 'Great app! Love the workshops.' },
  { id: 2, user: 'Jane Smith', message: 'More transportation options would be helpful.' },
]

const initialTimeBankTransactions: TimeBankTransaction[] = [
  { id: 1, user: 'John Doe', service: 'Cooking', credits: 2 },
  { id: 2, user: 'Jane Smith', service: 'Gardening', credits: 3 },
]

const initialSkillSwapEvents: SkillSwapEvent[] = [
  { id: 1, name: 'Skill Swap Event 1', date: '2023-12-01', description: 'Trade skills and services with community members.' },
  { id: 2, name: 'Skill Swap Event 2', date: '2023-12-15', description: 'Foster collaboration and resource sharing.' },
]

const initialStudentVolunteerPrograms: StudentVolunteerProgram[] = [
  { id: 1, name: 'Student Volunteer Program 1', description: 'Collaborate with local schools for volunteer opportunities.' },
  { id: 2, name: 'Student Volunteer Program 2', description: 'Engage students in community service.' },
]

export default function App() {
  const [resources, setResources] = useState<Resource[]>(initialResources)
  const [user, setUser] = useState<User>(initialUser)
  const [partners, setPartners] = useState<Partner[]>(initialPartners)
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [workshops, setWorkshops] = useState<Workshop[]>(initialWorkshops)
  const [resourceLinks, setResourceLinks] = useState<ResourceLink[]>(initialResourceLinks)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks)
  const [timeBankTransactions, setTimeBankTransactions] = useState<TimeBankTransaction[]>(initialTimeBankTransactions)
  const [skillSwapEvents, setSkillSwapEvents] = useState<SkillSwapEvent[]>(initialSkillSwapEvents)
  const [studentVolunteerPrograms, setStudentVolunteerPrograms] = useState<StudentVolunteerProgram[]>(initialStudentVolunteerPrograms)
  const [showProfile, setShowProfile] = useState(false)
  const [showMap, setShowMap] = useState(true)
  const [showPartners, setShowPartners] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [showWorkshops, setShowWorkshops] = useState(false)
  const [showResourceHub, setShowResourceHub] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showTimeBank, setShowTimeBank] = useState(false)
  const [showSkillSwap, setShowSkillSwap] = useState(false)
  const [showStudentVolunteers, setShowStudentVolunteers] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [timeBankService, setTimeBankService] = useState('')
  const [timeBankCredits, setTimeBankCredits] = useState(0)

  const handleRegister = () => {
    setUser({ ...user, id: Date.now() })
    setShowProfile(true)
  }

  const handleUseReusableContainer = () => {
    setUser({ ...user, points: user.points + 10 })
  }

  const handleAddFeedback = () => {
    if (feedbackMessage.trim()) {
      setFeedbacks([...feedbacks, { id: Date.now(), user: user.name || 'Anonymous', message: feedbackMessage }])
      setFeedbackMessage('')
    }
  }

  const handleAddTimeBankTransaction = () => {
    if (timeBankService.trim() && timeBankCredits > 0) {
      setTimeBankTransactions([...timeBankTransactions, { id: Date.now(), user: user.name || 'Anonymous', service: timeBankService, credits: timeBankCredits }])
      setTimeBankService('')
      setTimeBankCredits(0)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resource Locator</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="outline" onClick={() => setShowMap(true)}>Map</Button></li>
              <li><Button variant="outline" onClick={() => setShowProfile(true)}>Profile</Button></li>
              <li><Button variant="outline" onClick={() => setShowPartners(true)}>Partners</Button></li>
              <li><Button variant="outline" onClick={() => setShowEvents(true)}>Events</Button></li>
              <li><Button variant="outline" onClick={() => setShowWorkshops(true)}>Workshops</Button></li>
              <li><Button variant="outline" onClick={() => setShowResourceHub(true)}>Resource Hub</Button></li>
              <li><Button variant="outline" onClick={() => setShowTimeBank(true)}>Time Bank</Button></li>
              <li><Button variant="outline" onClick={() => setShowSkillSwap(true)}>Skill Swap</Button></li>
              <li><Button variant="outline" onClick={() => setShowStudentVolunteers(true)}>Student Volunteers</Button></li>
              <li><Button variant="outline" onClick={() => setShowFeedback(true)}>Feedback</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {showMap && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Nearby Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map(resource => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <MapPin className="inline-block mr-2 h-4 w-4" /> Location: {resource.location.lat}, {resource.location.lng}
                    </p>
                    {resource.freeForPoor && (
                      <p className="text-green-500">
                        <DollarSign className="inline-block mr-2 h-4 w-4" /> Free for Poor People
                      </p>
                    )}
                    {resource.type === 'food-recovery' && (
                      <p className="text-blue-500">
                        <Leaf className="inline-block mr-2 h-4 w-4" /> Food Recovery Program
                      </p>
                    )}
                    {resource.type === 'mobile-pantry' && (
                      <p className="text-blue-500">
                        <Truck className="inline-block mr-2 h-4 w-4" /> Mobile Food Pantry
                      </p>
                    )}
                    {resource.type === 'healthcare' && (
                      <p className="text-blue-500">
                        <Stethoscope className="inline-block mr-2 h-4 w-4" /> Free Healthcare
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showProfile && (
          <div>
            <h2 className="text-3xl font-bold mb-6">User Profile</h2>
            {!user.id ? (
              <div>
                <h3 className="text-xl font-bold mb-4">Register</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="needs">Needs</Label>
                    <Textarea id="needs" value={user.needs.join(', ')} onChange={(e) => setUser({ ...user, needs: e.target.value.split(',').map(n => n.trim()) })} />
                  </div>
                  <Button onClick={handleRegister}>Register</Button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">Profile</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="needs">Needs</Label>
                    <Textarea id="needs" value={user.needs.join(', ')} onChange={(e) => setUser({ ...user, needs: e.target.value.split(',').map(n => n.trim()) })} />
                  </div>
                  <div>
                    <Label htmlFor="points">Points</Label>
                    <Input id="points" value={user.points} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => setUser(initialUser)}>Edit Profile</Button>
                  <Button variant="secondary" onClick={handleUseReusableContainer}>
                    <Leaf className="inline-block mr-2 h-4 w-4" /> Use Reusable Container (+10 Points)
                  </Button>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">Sustainable Transportation Options</h4>
                    <p className="text-muted-foreground">
                      <Car className="inline-block mr-2 h-4 w-4" /> Carpooling
                    </p>
                    <p className="text-muted-foreground">
                      <Truck className="inline-block mr-2 h-4 w-4" /> Public Transportation
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {showPartners && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map(partner => (
                <Card key={partner.id}>
                  <CardHeader>
                    <CardTitle>{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showEvents && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Community Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Calendar className="inline-block mr-2 h-4 w-4" /> Date: {event.date}
                    </p>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showWorkshops && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Educational Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map(workshop => (
                <Card key={workshop.id}>
                  <CardHeader>
                    <CardTitle>{workshop.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Calendar className="inline-block mr-2 h-4 w-4" /> Date: {workshop.date}
                    </p>
                    <p className="text-muted-foreground">{workshop.description}</p>
                    {workshop.type === 'canning' && (
                      <p className="text-blue-500">
                        <Package className="inline-block mr-2 h-4 w-4" /> Canning and Preserving Classes
                      </p>
                    )}
                    {workshop.type === 'fermentation' && (
                      <p className="text-blue-500">
                        <Flask className="inline-block mr-2 h-4 w-4" /> Fermentation Workshops
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showResourceHub && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Digital Resource Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceLinks.map(link => (
                <Card key={link.id}>
                  <CardHeader>
                    <CardTitle>{link.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Database className="inline-block mr-2 h-4 w-4" /> <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit</a>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showTimeBank && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Time Bank</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Add a Transaction</h3>
              <div>
                <Label htmlFor="timeBankService">Service</Label>
                <Input id="timeBankService" value={timeBankService} onChange={(e) => setTimeBankService(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="timeBankCredits">Credits</Label>
                <Input id="timeBankCredits" type="number" value={timeBankCredits} onChange={(e) => setTimeBankCredits(Number(e.target.value))} />
              </div>
              <Button onClick={handleAddTimeBankTransaction}>
                <Clock2 className="inline-block mr-2 h-4 w-4" /> Add Transaction
              </Button>
            </div>
            <h3 className="text-2xl font-bold mt-6">Time Bank Transactions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeBankTransactions.map(transaction => (
                <Card key={transaction.id}>
                  <CardHeader>
                    <CardTitle>{transaction.user}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Clock2 className="inline-block mr-2 h-4 w-4" /> Service: {transaction.service}
                    </p>
                    <p className="text-muted-foreground">
                      <Users2 className="inline-block mr-2 h-4 w-4" /> Credits: {transaction.credits}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showSkillSwap && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Skill Swap Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillSwapEvents.map(event => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Calendar className="inline-block mr-2 h-4 w-4" /> Date: {event.date}
                    </p>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showStudentVolunteers && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Student Volunteer Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentVolunteerPrograms.map(program => (
                <Card key={program.id}>
                  <CardHeader>
                    <CardTitle>{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {showFeedback && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Feedback</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea id="feedback" value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} />
              </div>
              <Button onClick={handleAddFeedback}>
                <MessageCircle className="inline-block mr-2 h-4 w-4" /> Submit Feedback
              </Button>
            </div>
            <h3 className="text-2xl font-bold mt-6">Previous Feedback</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbacks.map(feedback => (
                <Card key={feedback.id}>
                  <CardHeader>
                    <CardTitle>{feedback.user}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feedback.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-muted mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Resource Locator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}