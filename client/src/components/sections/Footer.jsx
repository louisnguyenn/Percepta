export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-6 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Louis Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
