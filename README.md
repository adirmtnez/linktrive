# Linktrive

Una aplicación web moderna construida con Next.js y shadcn/ui para gestionar y organizar enlaces.

## 🚀 Tecnologías

- **[Next.js 15.4.4](https://nextjs.org)** - Framework de React con App Router
- **[React 19.1.0](https://react.dev)** - Librería de interfaz de usuario
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático para JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework de CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com)** - Componentes de UI reutilizables
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rápido para desarrollo
- **[ESLint](https://eslint.org)** - Linter para mantener código limpio

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd linktrive
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo con Turbopack
npm run build      # Construye la aplicación para producción
npm run start      # Inicia la aplicación en modo producción
npm run lint       # Ejecuta ESLint para verificar el código
```

## 🎨 Componentes shadcn/ui

Componentes instalados:
- `Button` - Botones con múltiples variantes
- `Card` - Tarjetas con header, content y description
- `Input` - Campos de entrada para formularios
- `Label` - Etiquetas para elementos de formulario

Para agregar más componentes:
```bash
npx shadcn@latest add [component-name]
```

## 📁 Estructura del Proyecto

```
linktrive/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── globals.css      # Estilos globales con Tailwind
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página de inicio
│   ├── components/
│   │   └── ui/              # Componentes de shadcn/ui
│   └── lib/
│       └── utils.ts         # Utilidades (clsx + tailwind-merge)
├── public/                  # Archivos estáticos
├── components.json          # Configuración de shadcn/ui
└── ...
```

## 🔧 Configuración

- **shadcn/ui**: Estilo New York, color base neutral, CSS variables habilitadas
- **TypeScript**: Configuración estricta
- **Tailwind CSS**: v4 con PostCSS
- **Import Aliases**: `@/*` apunta a `src/*`

## 🚀 Deployment

La forma más fácil de desplegar es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
