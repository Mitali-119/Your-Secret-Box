'use client';

const Footer = () => {
    return (
        <div  className="max-w-md mx-auto p-4">
        <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
            <p className="text-sm md:text-base lg:text-lg">
                &quot;Your Secret Box&quot;
            </p>
            <p className="text-sm md:text-base lg:text-lg">
                Powered by caffeine and anonymous Love {' '}
                <a
                    href="https://www.linkedin.com/in/mitali-kumari-6a196828a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Mitali❤️
                </a>
            </p>
        </footer>
        </div>
    );
}

export default Footer;