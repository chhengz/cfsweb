import { useState } from 'react';

function LanguageSelector({ langFlag, handleChangeLang, otherFlag, onSelectLang }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (flag) => {
        onSelectLang(flag);
        setIsOpen(false);
    };

    return (
        <div className="relative md:ml-8 mr-2 flex items-center justify-center hover:drop-shadow-md">
            <button
                onClick={toggleDropdown}
                className="w-10 h-7 aspect-video cursor-pointer rounded overflow-hidden"
            >
                <img
                    src={langFlag}
                    alt="switch-lang"
                    className="w-full h-full object-cover"
                />
            </button>

            {isOpen && (
                <div className="absolute top-10 right-0 bg-white border rounded shadow-md z-10">
                    <button
                        onClick={() => handleSelect(langFlag)}
                        className="w-10 h-7 aspect-video cursor-pointer"
                    >
                        <img
                            src={langFlag}
                            alt="language-1"
                            className="w-full h-full object-cover"
                        />
                    </button>
                    <button
                        onClick={() => handleSelect(otherFlag)}
                        className="w-10 h-7 aspect-video cursor-pointer"
                    >
                        <img
                            src={otherFlag}
                            alt="language-2"
                            className="w-full h-full object-cover"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;


/*
to call this component, you can use it like this:

<LanguageSelector
  langFlag={EN_IMG}
  otherFlag={KH_IMG}
  onSelectLang={(flag) => {
    // Do something with selected flag
    // console.log('Selected language flag:', flag);
    // Optionally call your existing handler
    handleChangeLang(flag);
  }}
/>


*/