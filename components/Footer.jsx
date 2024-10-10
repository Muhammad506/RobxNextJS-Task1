

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <footer className="border-t border-gray-300 px-2 md:px-20 py-4 w-full bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; 2024 Edusity. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms of Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
