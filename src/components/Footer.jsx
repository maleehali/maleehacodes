function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p>© 2025 My Portfolio</p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="https://github.com/your-github" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/your-twitter" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;

