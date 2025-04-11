import { useEffect } from "react";
import { useNetwork } from "../../context/NetworkContext";
import toast, { Toaster } from "react-hot-toast";
import '../../../assets/css/offlineNotification.css'

export const OfflineToastNotification = () => {
    const { isOnline } = useNetwork();

    useEffect(() => {
        if (!isOnline) {
            toast.custom(
                (t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-red-500 shadow-lg rounded-lg pointer-events-auto flex toast-animation `} // ring-1 ring-black ring-opacity-5
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>

                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-white">
                                        Offline Mode
                                    </p>
                                    <p className="mt-1 text-sm text-white">
                                        You're currently offline. Some features may not be available.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-red-400">
                            <button
                                onClick={() => {
                                    toast.dismiss(t.id);
                                    window.location.reload();
                                }}
                                className="cursor-pointer w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-gray-200 focus:outline-none"
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                ),
                {
                    duration: Infinity, // Stays until dismissed or online
                    position: 'bottom-center',
                }
            );
        } else {
            toast.dismiss(); // Dismiss all toasts when online
        }
    }, [isOnline]);

    return <Toaster />;
};