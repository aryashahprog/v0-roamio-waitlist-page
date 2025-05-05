export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-roamio-blue text-lg font-bold" style={{ fontFamily: "Arial, sans-serif" }}>
            roamio
          </span>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Roamio. All rights reserved.</p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
