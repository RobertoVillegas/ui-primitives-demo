import { useState } from "react"
import { UISurfaceProvider, Button, type Surface } from "./lib/ui"

function App() {
  const [surface, setSurface] = useState<Surface>("user")

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-xl space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-2xl font-bold">UI Primitives + CVA</h1>
          <p className="text-slate-500 text-sm">
            Same component, different surface context
          </p>
        </header>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span className={surface === "user" ? "font-medium" : "text-slate-400"}>
            User
          </span>
          <button
            onClick={() => setSurface(s => s === "admin" ? "user" : "admin")}
            className={`relative h-6 w-11 rounded-full transition-colors ${
              surface === "admin" ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
                surface === "admin" ? "translate-x-5" : ""
              }`}
            />
          </button>
          <span className={surface === "admin" ? "font-medium" : "text-slate-400"}>
            Admin
          </span>
        </div>

        {/* Demo */}
        <UISurfaceProvider value={surface}>
          <div className="space-y-4 p-6 rounded-xl border bg-slate-50">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
            </div>
            <div className="flex gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </UISurfaceProvider>

        {/* Info */}
        <div className="text-sm text-slate-600 space-y-2">
          <p><strong>Admin:</strong> Bold text, fast transitions, no animations</p>
          <p><strong>User:</strong> Medium weight, smooth transitions, lift + shadow on hover</p>
        </div>
      </div>
    </div>
  )
}

export default App
