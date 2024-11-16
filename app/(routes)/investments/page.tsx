import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LuArrowUpRight, LuBell, LuSearch, LuTrendingUp, LuWallet } from "react-icons/lu"

export default function Component() {
  return (
    <div className="min-h-[calc(100vh-392px)] bg-[#FAF9F6]">
      {/* Header */}
      <header className="border-b bg-white p-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-black" />
            <div className="relative">
              <Input className="w-[300px] pl-9" placeholder="Search investments..." />
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <LuBell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Self-serve & transparent method for investing together</h1>
          <p className="text-gray-500">Track and manage your investments in one place</p>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-12 space-x-8">
            <TabsTrigger value="all" className="data-[state=active]:border-b-2 border-black rounded-none">
              All Assets
            </TabsTrigger>
            <TabsTrigger value="stocks" className="data-[state=active]:border-b-2 border-black rounded-none">
              Stocks
            </TabsTrigger>
            <TabsTrigger value="crypto" className="data-[state=active]:border-b-2 border-black rounded-none">
              Crypto
            </TabsTrigger>
            <TabsTrigger value="bonds" className="data-[state=active]:border-b-2 border-black rounded-none">
              Bonds
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm text-gray-500">Total Balance</CardTitle>
                <div className="text-2xl font-bold">$284,985.00</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-500">
                  <LuTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2.4%</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm text-gray-500">Monthly Profit</CardTitle>
                <div className="text-2xl font-bold">$12,475.00</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-500">
                  <LuTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+8.2%</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm text-gray-500">Active Investments</CardTitle>
                <div className="text-2xl font-bold">24</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-blue-500">
                  <LuWallet className="h-4 w-4 mr-1" />
                  <span className="text-sm">Active</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm text-gray-500">Total Returns</CardTitle>
                <div className="text-2xl font-bold">$89,224.00</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-500">
                  <LuArrowUpRight className="h-4 w-4 mr-1" />
                  <span className="text-sm">+14.8%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <TabsContent value="all" className="space-y-6">
            {[
              {
                name: "Technology Growth Fund",
                type: "Stock",
                amount: "$50,000",
                return: "+12.3%",
                status: "Active",
              },
              {
                name: "Bitcoin Investment",
                type: "Crypto",
                amount: "$25,000",
                return: "+18.7%",
                status: "Active",
              },
              {
                name: "Government Bonds",
                type: "Bonds",
                amount: "$75,000",
                return: "+4.2%",
                status: "Active",
              },
            ].map((investment) => (
              <Card key={investment.name}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <LuWallet className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{investment.name}</h3>
                      <p className="text-sm text-gray-500">{investment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{investment.amount}</div>
                    <div className="text-sm text-green-500">{investment.return}</div>
                  </div>
                  <Button variant="outline" className="ml-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="stocks" className="space-y-6">
            {/* Similar structure for stocks */}
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            {/* Similar structure for crypto */}
          </TabsContent>

          <TabsContent value="bonds" className="space-y-6">
            {/* Similar structure for bonds */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}