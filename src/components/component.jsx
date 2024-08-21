
import Button from './ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 px-4 border-b bg-primary text-primary-foreground">
        <h1 className="text-xl font-bold text-gray-600">ISL to Txt</h1>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-10">
        <div className="flex-1 bg-gray-200 rounded-md p-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-400 rounded-md">
            <img
              src="/placeholder.svg"
              alt="Camera Feed"
              className="object-cover w-full h-full rounded-md"
              width="600"
              height="400"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-gray-100 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">Recognized Text</h2>
            <div className="flex-1 bg-white p-4 rounded-md border">
              <p className="text-gray-600">The recognized text will appear here...</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">Select Language</h2>
            <Select>
              <SelectTrigger id="language" aria-label="Language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center h-16 border-t bg-primary text-primary-foreground">
        <p className="text-gray-600">
          © 2023 ISL to Txt.{" "}
          <a href="thepindia.com" className="underline">
            Documentation
          </a>{" "}
          |{" "}
          <a href="thepindia.com" className="underline">
            Support
          </a>
        </p>
      </footer>
    </div>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
