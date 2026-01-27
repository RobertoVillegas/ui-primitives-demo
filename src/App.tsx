import { useState } from "react";
import { UISurfaceProvider, Button, type Surface } from "./lib/ui";

function App() {
  const [surface, setSurface] = useState<Surface>("user");

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
          <span
            className={surface === "user" ? "font-medium" : "text-slate-400"}
          >
            User
          </span>
          <button
            onClick={() =>
              setSurface((s) => (s === "admin" ? "user" : "admin"))
            }
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
          <span
            className={surface === "admin" ? "font-medium" : "text-slate-400"}
          >
            Admin
          </span>
        </div>

        {/* Demo */}
        <UISurfaceProvider value={surface}>
          <div className="space-y-6 p-6 rounded-xl border bg-slate-50">
            {/* All Variants */}
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </section>

            {/* All Sizes */}
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Sizes
              </h3>
              <div className="flex items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </section>

            {/* Size × Variant Combinations */}
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Small × Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="default">
                  Primary
                </Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Large × Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" variant="default">
                  Primary
                </Button>
                <Button size="lg" variant="secondary">
                  Secondary
                </Button>
                <Button size="lg" variant="outline">
                  Outline
                </Button>
                <Button size="lg" variant="ghost">
                  Ghost
                </Button>
                <Button size="lg" variant="destructive">
                  Delete
                </Button>
              </div>
            </section>

            {/* Disabled States */}
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Disabled States
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled variant="default">
                  Primary
                </Button>
                <Button disabled variant="secondary">
                  Secondary
                </Button>
                <Button disabled variant="outline">
                  Outline
                </Button>
                <Button disabled variant="ghost">
                  Ghost
                </Button>
                <Button disabled variant="destructive">
                  Delete
                </Button>
              </div>
            </section>

            {/* Disabled × Size */}
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Disabled × Sizes
              </h3>
              <div className="flex items-center gap-3">
                <Button disabled size="sm">
                  Small
                </Button>
                <Button disabled size="default">
                  Default
                </Button>
                <Button disabled size="lg">
                  Large
                </Button>
              </div>
            </section>
          </div>
        </UISurfaceProvider>

        {/* Info */}
        <div className="text-sm text-slate-600 space-y-2">
          <p>
            <strong>Admin:</strong> Bold text, fast transitions, no animations
          </p>
          <p>
            <strong>User:</strong> Medium weight, smooth transitions, lift +
            shadow on hover
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
