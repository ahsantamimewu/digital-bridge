import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Upload, Loader2 } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z.string().min(10, "Please enter a valid phone number"),
  years_of_experience: z.string().min(1, "Please select years of experience"),
  current_job_title: z.string().min(2, "Please enter your current job title"),
  desired_positions: z.array(z.string()).min(1, "Please select at least one desired position"),
  industry_experience: z.array(z.string()).min(1, "Please select at least one industry"),
  technical_skills: z.array(z.string()).min(1, "Please select at least one technical skill"),
  linkedin_profile: z.string().url("Please enter a valid LinkedIn URL").refine(
    (url) => url.includes("linkedin.com/in/"),
    "Please enter a valid LinkedIn profile URL"
  ),
  github_profile: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
  notice_period: z.string().min(1, "Please select your notice period"),
  salary_currency: z.string().default("BDT"),
  salary_amount: z.string().min(1, "Please enter expected salary"),
});

type FormData = z.infer<typeof formSchema>;

const desiredPositions = [
  "Full-Stack Engineer",
  "Frontend Engineer", 
  "Backend Engineer",
  "DevOps Engineer",
  "Mobile Developer",
  "Data Engineer",
  "ML Engineer",
  "QA Engineer",
  "Product Manager",
  "UI/UX Designer"
];

const industries = [
  "Fintech",
  "SaaS",
  "EdTech",
  "Healthcare",
  "E-commerce",
  "Gaming",
  "Media & Entertainment",
  "Enterprise Software",
  "Blockchain/Web3",
  "AI/ML"
];

const technicalSkills = {
  "🧩 Frontend": {
    "Languages & Frameworks": [
      "JavaScript", "TypeScript", "HTML/CSS", "JSX", "TSX"
    ],
    "Libraries & Frameworks": [
      "React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte", "SvelteKit", 
      "SolidJS", "Ember.js", "Alpine.js"
    ],
    "Styling & UI": [
      "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "Ant Design", 
      "Styled Components", "Emotion", "SCSS/SASS", "LESS"
    ],
    "Bundlers & Build Tools": [
      "Webpack", "Vite", "Parcel", "Rollup", "Babel", "Esbuild"
    ],
    "Other Tools": [
      "jQuery", "Three.js", "D3.js", "Highcharts", "GSAP (GreenSock)"
    ]
  },
  "🧪 Testing & QA": {
    "Frontend & Backend Testing": [
      "Jest", "Mocha", "Chai", "Vitest", "Jasmine", "QUnit", "Ava"
    ],
    "E2E Testing & Automation": [
      "Cypress", "Selenium", "Puppeteer", "Playwright", "TestCafe"
    ],
    "API Testing": [
      "Postman", "Newman", "Insomnia"
    ],
    "Code Quality": [
      "ESLint", "Prettier", "SonarQube", "CodeClimate"
    ]
  },
  "🖥️ Backend": {
    "Languages & Frameworks": [
      "Python", "Java", "Node.js", "Go", "PHP", "Ruby", "C#", "Kotlin", "Rust"
    ],
    "Frameworks": [
      "Django", "Flask", "FastAPI", "Express.js", "Spring Boot", "NestJS", 
      "Koa", ".NET", "Laravel", "Ruby on Rails", "Hapi.js", "Gin (Go)"
    ],
    "Serverless & Edge Computing": [
      "AWS Lambda", "Google Cloud Functions", "Vercel Edge Functions", "Cloudflare Workers"
    ]
  },
  "📱 Mobile": {
    "Cross-platform": [
      "React Native", "Flutter", "Ionic", "Xamarin", "NativeScript"
    ],
    "Native": [
      "iOS (Swift, Objective-C)", "Android (Kotlin, Java)"
    ],
    "Mobile Tools": [
      "Expo", "Fastlane", "Firebase Cloud Messaging", "CodePush"
    ]
  },
  "🗄️ Database": {
    "Relational": [
      "PostgreSQL", "MySQL", "SQLite", "SQL Server", "Oracle"
    ],
    "NoSQL": [
      "MongoDB", "CouchDB", "Cassandra", "DynamoDB", "Firestore", "FaunaDB"
    ],
    "In-Memory/Data Caching": [
      "Redis", "Memcached"
    ],
    "Search Engines": [
      "Elasticsearch", "MeiliSearch", "Typesense"
    ],
    "ORMs & Query Tools": [
      "Prisma", "Sequelize", "TypeORM", "Hibernate", "SQLAlchemy", "Knex.js", "Objection.js"
    ]
  },
  "☁️ Cloud & DevOps": {
    "Cloud Providers": [
      "AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode", "Vercel", "Netlify", "Heroku", "Render"
    ],
    "Infrastructure & Containerization": [
      "Docker", "Kubernetes", "Terraform", "Pulumi", "Ansible", "Helm"
    ],
    "CI/CD & DevOps Tools": [
      "GitHub Actions", "GitLab CI", "CircleCI", "Jenkins", "Travis CI", "ArgoCD"
    ],
    "Version Control": [
      "Git", "GitHub", "GitLab", "Bitbucket"
    ],
    "Monitoring & Logging": [
      "Prometheus", "Grafana", "Datadog", "New Relic", "Sentry", "ELK Stack (Elasticsearch, Logstash, Kibana)"
    ]
  },
  "🎨 Design & UX": {
    "Design Tools": [
      "Figma", "Adobe XD", "Illustrator", "Photoshop", "Sketch", "InVision", "Framer", "Balsamiq"
    ],
    "Design Skills": [
      "Wireframing", "Prototyping", "UI/UX Design", "Accessibility (WCAG)", "User Testing", "Heuristic Evaluation"
    ],
    "Design Systems": [
      "Storybook", "Zeroheight", "Lona"
    ]
  },
  "📊 Data & AI": {
    "Languages & Tools": [
      "Python", "R", "SQL", "Jupyter", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"
    ],
    "ML/DL Frameworks": [
      "Scikit-learn", "TensorFlow", "PyTorch", "HuggingFace Transformers", "Keras", "XGBoost", "LightGBM"
    ],
    "AI & NLP Platforms": [
      "OpenAI API", "LangChain", "Cohere", "Azure OpenAI", "LlamaIndex"
    ],
    "Data Engineering Tools": [
      "Apache Airflow", "dbt", "Kafka", "Spark", "Snowflake", "BigQuery", "Dask", "DuckDB"
    ],
    "BI & Visualization": [
      "Power BI", "Tableau", "Looker", "Superset", "Metabase", "Redash"
    ]
  },
  "⚙️ Other Tools & Ecosystem": {
    "CRM & Automation": [
      "Salesforce", "HubSpot", "Zoho", "Pipedrive", "Drip", "Zapier", "Make (Integromat)"
    ],
    "Messaging/Streaming": [
      "Kafka", "RabbitMQ", "Redpanda", "NATS", "MQTT"
    ],
    "APIs": [
      "REST", "GraphQL", "gRPC", "OpenAPI/Swagger", "PostgREST"
    ],
    "Architecture & Patterns": [
      "Microservices", "Serverless", "Monorepos", "Domain-Driven Design (DDD)", "CQRS"
    ],
    "Project & Agile Tools": [
      "Jira", "Trello", "Notion", "Asana", "ClickUp", "Confluence"
    ],
    "Others": [
      "WebSockets", "OAuth2", "SSO", "Firebase Auth", "Stripe", "Twilio", "Mapbox"
    ]
  }
};

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desired_positions: [],
      industry_experience: [],
      technical_skills: [],
      salary_currency: "BDT",
      github_profile: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setResumeFile(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file",
          variant: "destructive",
        });
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission since no Supabase integration
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your application. We'll be in touch soon.",
      });

      form.reset();
      setResumeFile(null);

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Join the Team That Builds the{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Tell us about your experience, and we'll connect when there's a fit.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Join Our Team</CardTitle>
              <CardDescription className="text-center text-lg">
                Submit your application to be considered for exciting opportunities at Digital Bridge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+8801712345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="years_of_experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<1">Less than 1 year</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-8">6-8 years</SelectItem>
                              <SelectItem value="9-12">9-12 years</SelectItem>
                              <SelectItem value="12+">12+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="current_job_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Job Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="Senior Frontend Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Desired Positions */}
                  <FormField
                    control={form.control}
                    name="desired_positions"
                    render={() => (
                      <FormItem>
                        <FormLabel>Desired Positions * (Select all that apply)</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {desiredPositions.map((position) => (
                            <FormField
                              key={position}
                              control={form.control}
                              name="desired_positions"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(position)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, position])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== position
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {position}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Industry Experience */}
                  <FormField
                    control={form.control}
                    name="industry_experience"
                    render={() => (
                      <FormItem>
                        <FormLabel>Industry Experience * (Select all that apply)</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {industries.map((industry) => (
                            <FormField
                              key={industry}
                              control={form.control}
                              name="industry_experience"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(industry)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, industry])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== industry
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {industry}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Technical Skills */}
                  <FormField
                    control={form.control}
                    name="technical_skills"
                    render={() => (
                      <FormItem>
                        <FormLabel>🧠 Technical Skills (Expanded) *</FormLabel>
                        <p className="text-sm text-muted-foreground">Select all technologies and tools you're proficient with</p>
                        <div className="space-y-6">
                          {Object.entries(technicalSkills).map(([category, subcategories]) => (
                            <div key={category} className="space-y-4">
                              <h4 className="font-medium text-foreground">{category}</h4>
                              {Object.entries(subcategories).map(([subcategory, skills]) => (
                                <div key={subcategory} className="space-y-2 ml-4">
                                  <h5 className="text-sm font-medium text-muted-foreground">{subcategory}:</h5>
                                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-4">
                                    {skills.map((skill) => (
                                      <FormField
                                        key={skill}
                                        control={form.control}
                                        name="technical_skills"
                                        render={({ field }) => {
                                          return (
                                            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                              <FormControl>
                                                <Checkbox
                                                  checked={field.value?.includes(skill)}
                                                  onCheckedChange={(checked) => {
                                                    return checked
                                                      ? field.onChange([...field.value, skill])
                                                      : field.onChange(
                                                          field.value?.filter(
                                                            (value) => value !== skill
                                                          )
                                                        )
                                                  }}
                                                />
                                              </FormControl>
                                              <FormLabel className="text-xs font-normal">
                                                {skill}
                                              </FormLabel>
                                            </FormItem>
                                          )
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Resume Upload */}
                  <FormItem>
                    <FormLabel>Resume/CV *</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed border-border rounded-lg p-4">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <div className="text-center">
                            <label htmlFor="resume" className="cursor-pointer text-primary hover:underline">
                              Click to upload your resume
                            </label>
                            <input
                              id="resume"
                              type="file"
                              accept=".pdf,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <p className="text-xs text-muted-foreground mt-1">PDF or DOCX (Max 10MB)</p>
                          </div>
                          {resumeFile && (
                            <p className="text-sm text-primary">✓ {resumeFile.name}</p>
                          )}
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>

                  {/* Profile Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="linkedin_profile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile *</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/your-profile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="github_profile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GitHub Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://github.com/your-username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">🕒 Additional Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="notice_period"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notice Period *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select notice period" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0 weeks">0 weeks</SelectItem>
                              <SelectItem value="1 week">1 week</SelectItem>
                              <SelectItem value="2 weeks">2 weeks</SelectItem>
                              <SelectItem value="1 month">1 month</SelectItem>
                              <SelectItem value="More than 1 month">More than 1 month</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="salary_currency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Currency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="BDT">BDT</SelectItem>
                                <SelectItem value="USD">USD</SelectItem>
                                <SelectItem value="EUR">EUR</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="salary_amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expected Monthly Salary *</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="50000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}