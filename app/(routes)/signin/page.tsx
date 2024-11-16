import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LuGithub, LuMail } from "react-icons/lu"
import { FcGoogle } from "react-icons/fc"

export default function Component() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        <div className="relative w-full h-full flex items-center justify-center p-12">
          <div className="text-white space-y-4">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-purple-100">Start managing your investments today</p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl" />
        </div>
      </div>

      {/* Right side - Auth forms */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            {/* Sign In Tab */}
            <TabsContent value="signin">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your email to sign in to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign In</Button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline">
                    <FcGoogle className="h-5 w-5" />
                  </Button>
                  <Button variant="outline">
                    <LuGithub className="h-5 w-5" />
                  </Button>
                  <Button variant="outline">
                    <LuMail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Create Account</Button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline">
                    <FcGoogle className="h-5 w-5" />
                  </Button>
                  <Button variant="outline">
                    <LuGithub className="h-5 w-5" />
                  </Button>
                  <Button variant="outline">
                    <LuMail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}