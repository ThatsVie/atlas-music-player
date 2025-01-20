export default function Footer() {
  return (
    <footer className="text-center p-6 bg-darkMagenta text-lightTeal font-semibold">
      &copy; {new Date().getFullYear()} Atlas School -{" "}
      <a
        href="https://github.com/ThatsVie/atlas-music-player"
        className="text-brightYellow underline font-bold hover:text-lightTeal focus:outline-none focus:ring-2 focus:ring-citrusOrange px-2"
      >
        GitHub
      </a>
    </footer>
  );
}
