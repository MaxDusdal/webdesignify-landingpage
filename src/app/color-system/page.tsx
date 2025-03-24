"use client"

import * as React from "react"
import { 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight, 
  HelpCircle, 
  InfoIcon, 
  MoreHorizontal,
  Search, 
  User 
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ColorSystemPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container py-10 mx-auto max-w-screen-lg">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Color System</h1>
          <p className="text-muted-foreground mt-1">
            A showcase of UI components and design tokens.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="colors">Color Tokens</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="space-y-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Various button styles and sizes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" disabled>Disabled</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="icon"><Search className="h-4 w-4" /></Button>
                    <Button size="icon" variant="outline"><User className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cards &amp; Badges</CardTitle>
                  <CardDescription>Containers and status indicators.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                  <Card className="shadow-sm">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Nested Card</CardTitle>
                      <CardDescription>A card inside another card</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">This demonstrates nested components and spacing.</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">Cancel</Button>
                      <Button size="sm">Save</Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>Interactive input elements.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Notification preferences</Label>
                    <RadioGroup defaultValue="all">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1">All notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="important" id="r2" />
                        <Label htmlFor="r2">Important only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="r3" />
                        <Label htmlFor="r3">None</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress &amp; Sliders</CardTitle>
                  <CardDescription>Range and progress indicators.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Progress</Label>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Volume</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Range</Label>
                    <Slider defaultValue={[25, 75]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accordion &amp; Collapsible</CardTitle>
                  <CardDescription>Expandable content sections.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches your design system.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="mt-6">
                    <Collapsible className="w-full border rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Collapsible Example</h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="mt-2 text-sm">
                        This content can be collapsed and expanded.
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dialog &amp; Tooltips</CardTitle>
                  <CardDescription>Overlays and contextual information.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Dialog Example</DialogTitle>
                          <DialogDescription>
                            This dialog demonstrates the overlay component with a form inside.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover Me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This is a tooltip</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <InfoIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <AlertTriangle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                  <CardDescription>Skeleton loaders and loading placeholders.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <Skeleton className="h-[125px] rounded-xl" />
                    <Skeleton className="h-[125px] rounded-xl" />
                    <Skeleton className="h-[125px] rounded-xl" />
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="colors" className="space-y-8">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Color Tokens</CardTitle>
                  <CardDescription>Application theme color variables.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-background border"></div>
                      <div className="text-sm font-medium">Background</div>
                      <div className="text-xs text-muted-foreground">bg-background</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-foreground"></div>
                      <div className="text-sm font-medium">Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-card"></div>
                      <div className="text-sm font-medium">Card</div>
                      <div className="text-xs text-muted-foreground">bg-card</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-card-foreground"></div>
                      <div className="text-sm font-medium">Card Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-card-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-primary"></div>
                      <div className="text-sm font-medium">Primary</div>
                      <div className="text-xs text-muted-foreground">bg-primary</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-primary-foreground"></div>
                      <div className="text-sm font-medium">Primary Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-primary-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-secondary"></div>
                      <div className="text-sm font-medium">Secondary</div>
                      <div className="text-xs text-muted-foreground">bg-secondary</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-secondary-foreground"></div>
                      <div className="text-sm font-medium">Secondary Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-secondary-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-muted"></div>
                      <div className="text-sm font-medium">Muted</div>
                      <div className="text-xs text-muted-foreground">bg-muted</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-muted-foreground"></div>
                      <div className="text-sm font-medium">Muted Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-muted-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-accent"></div>
                      <div className="text-sm font-medium">Accent</div>
                      <div className="text-xs text-muted-foreground">bg-accent</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-accent-foreground"></div>
                      <div className="text-sm font-medium">Accent Foreground</div>
                      <div className="text-xs text-muted-foreground">bg-accent-foreground</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-destructive"></div>
                      <div className="text-sm font-medium">Destructive</div>
                      <div className="text-xs text-muted-foreground">bg-destructive</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-border"></div>
                      <div className="text-sm font-medium">Border</div>
                      <div className="text-xs text-muted-foreground">bg-border</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-input"></div>
                      <div className="text-sm font-medium">Input</div>
                      <div className="text-xs text-muted-foreground">bg-input</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-ring"></div>
                      <div className="text-sm font-medium">Ring</div>
                      <div className="text-xs text-muted-foreground">bg-ring</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="typography" className="space-y-8">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>Text styles and headings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                      Heading 1
                    </h1>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Heading 2
                    </h2>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      Heading 3
                    </h3>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Heading 4
                    </h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      This is a paragraph with some <strong>bold text</strong> and some <em>italic text</em> to demonstrate
                      how inline elements are styled within the typography system. You can also add <a href="#" className="font-medium text-primary underline underline-offset-4">links</a> that stand out appropriately.
                    </p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>First list item</li>
                      <li>Second list item</li>
                      <li>Third list item</li>
                    </ul>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                      &ldquo;This is a blockquote. It&apos;s commonly used to highlight a quote or an important statement.&rdquo;
                    </blockquote>
                    <div className="my-6 overflow-y-auto">
                      <pre className="inline-block w-full bg-muted p-4 font-mono text-sm">
                        {`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
