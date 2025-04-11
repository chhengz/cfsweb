
// // make an offline notification component
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setOffline } from '../redux/slices/offlineSlice';
// import { useTheme } from '@mui/material/styles';
// import { Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import { IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useMediaQuery } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useRef } from 'react';
// import { useCallback } from 'react';
// import { useMemo } from 'react';
// import { useLayoutEffect } from 'react';
// import { useStateCallback } from 'use-state-callback';
// import { usePrevious } from '../hooks/usePrevious';
// import { useIsMounted } from '../hooks/useIsMounted';
// import { useWindowSize } from '../hooks/useWindowSize';
// import { useIsOnline } from '../hooks/useIsOnline';
// import { useIsMobile } from '../hooks/useIsMobile';
// import { useIsDesktop } from '../hooks/useIsDesktop';
// import { useIsTablet } from '../hooks/useIsTablet';
// import { useIsSmall } from '../hooks/useIsSmall';
// import { useIsMedium } from '../hooks/useIsMedium';
// import { useIsLarge } from '../hooks/useIsLarge';
// import { useIsXLarge } from '../hooks/useIsXLarge';
// import { useIsXXLarge } from '../hooks/useIsXXLarge';
// import { useIsXXXLarge } from '../hooks/useIsXXXLarge';
// import { useIsXXXXLarge } from '../hooks/useIsXXXXLarge';
// import { useIsXXXXXLarge } from '../hooks/useIsXXXXXLarge';
// import { useIsXXXXXXLarge } from '../hooks/useIsXXXXXXLarge';
// import { useIsXXXXXXXLarge } from '../hooks/useIsXXXXXXXLarge';
// import { useIsXXXXXXXLarge } from '../hooks/useIsXXXXXXXLarge';


// const OfflineNotification = () => {

//     const { t } = useTranslation();
//     const dispatch = useDispatch();
//     const theme = useTheme();
//     const isMobile = useIsMobile();
//     const isDesktop = useIsDesktop();
//     const isTablet = useIsTablet();
//     const isSmall = useIsSmall();
//     const isMedium = useIsMedium();
//     const isLarge = useIsLarge();
//     const isXLarge = useIsXLarge();
//     const isXXLarge = useIsXXLarge();
//     const isXXXLarge = useIsXXXLarge();
//     const isXXXXLarge = useIsXXXXLarge();
//     const isXXXXXLarge = useIsXXXXXLarge();
//     const isXXXXXXLarge = useIsXXXXXXLarge();
//     const isXXXXXXXLarge = useIsXXXXXXXLarge();

//     // Check if the component is mounted
//     const isMounted = useIsMounted();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const windowSize = useWindowSize();
//     const isOnline = useIsOnline();
//     const prevIsOnline = usePrevious(isOnline);
//     const [open, setOpen] = useState(false);
//     const [isOffline, setIsOffline] = useState(false);
//     const [isOfflineState, setIsOfflineState] = useState(false);
//     const [isOfflineStateCallback, setIsOfflineStateCallback] = useStateCallback(false);
//     const [isOfflineStateCallbackPrev, setIsOfflineStateCallbackPrev] = useStateCallback(false);
//     const [isOfflineStateCallbackNext, setIsOfflineStateCallbackNext] = useStateCallback(false);

//     // Handle the close event of the snackbar
//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };
//     // Handle the offline event
//     const handleOffline = () => {
//         setIsOffline(true);
//         setOpen(true);
//         dispatch(setOffline(true));
//     };
//     // Handle the online event
//     const handleOnline = () => {
//         setIsOffline(false);
//         setOpen(false);
//         dispatch(setOffline(false));
//     };
//     // Check if the component is mounted
//     useLayoutEffect(() => {
//         if (isMounted) {
//             if (isOnline === false) {
//                 handleOffline();
//             } else {
//                 handleOnline();
//             }
//         }
//     }, [isOnline, isMounted]);
    


//   return (
//     <div>
//         <Snackbar
//             open={isOnline === false}
//             autoHideDuration={6000}
//             onClose={handleClose}
//             anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         >
//             <MuiAlert
//             onClose={handleClose}
//             severity="error"
//             sx={{ width: '100%' }}
//             variant="filled"
//             >
//             {t('offlineNotification')}
//             </MuiAlert>
//         </Snackbar>
//     </div>
//   )
// }

// export default OfflineNotification


import { useNetwork } from "../../context/NetworkContext";

export const OfflineNotification = () => {
  const { isOnline } = useNetwork();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-4 text-center z-50 animate-bounce">
      <div className="container mx-auto flex items-center justify-between">
        <span>You are currently offline. Some features may not be available.</span>
        <button 
          className="ml-4 px-3 py-1 bg-white text-red-500 rounded hover:bg-gray-100 transition cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};