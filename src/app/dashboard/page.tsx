import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
            <CardDescription>Manage your links</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You have 12 links</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Organize your links</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You have 5 categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>3 links added today</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
