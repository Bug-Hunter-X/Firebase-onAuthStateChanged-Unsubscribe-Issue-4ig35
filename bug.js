const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log("User is signed in:", user);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("User is signed out");
  }  
});

// unsubscribe from the listener when component is unmounted to prevent memory leaks
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);