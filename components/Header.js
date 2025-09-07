const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full pt-2 h-[66px] bg-white shadow-sm z-20 max-w-none">
        <div className="flex justify-between px-6 items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold h-full flex flex-col justify-center">
              TemplateSite
              <p className="text-xs font-normal -mt-1">NextJS template</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
