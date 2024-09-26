const Header = () => {
  return (
    <header>
      <div className="container mx-auto"></div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <a>
          <img src="/images/xora.svg" width={115} height={55} alt="Logo" />
        </a>
        <p className="text-sm">SaaS Landing Page</p>
      </div>
    </header>
  );
};

export default Header;
