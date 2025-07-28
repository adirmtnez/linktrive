import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">LinkyTrive</h1>
          <p className="text-muted-foreground text-lg">
            Next.js + shadcn/ui instalado correctamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card de ejemplo 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Componentes UI</CardTitle>
              <CardDescription>
                shadcn/ui está funcionando perfectamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full">Botón Principal</Button>
                <Button variant="outline" className="w-full">
                  Botón Secundario
                </Button>
                <Button variant="ghost" className="w-full">
                  Botón Ghost
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card de ejemplo 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Formulario</CardTitle>
              <CardDescription>
                Ejemplo de inputs y labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Ingresa tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <Button className="w-full">Enviar</Button>
              </div>
            </CardContent>
          </Card>

          {/* Card de ejemplo 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Configuración</CardTitle>
              <CardDescription>
                Tecnologías instaladas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Next.js</span>
                  <span className="text-green-600">✓ 15.4.4</span>
                </div>
                <div className="flex justify-between">
                  <span>React</span>
                  <span className="text-green-600">✓ 19.1.0</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-green-600">✓ Activado</span>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS</span>
                  <span className="text-green-600">✓ v4</span>
                </div>
                <div className="flex justify-between">
                  <span>shadcn/ui</span>
                  <span className="text-green-600">✓ Instalado</span>
                </div>
                <div className="flex justify-between">
                  <span>Turbopack</span>
                  <span className="text-green-600">✓ Activado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            ¡Todo listo para comenzar a desarrollar! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
