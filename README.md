# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: memory leaks due to improper unsubscription.  The provided code snippet showcases the problem and its solution.

## Problem

The `onAuthStateChanged` listener remains active even after the component is unmounted, leading to memory leaks and potential performance issues.  This often happens when the unsubscribe function isn't properly handled within the component's lifecycle.

## Solution

The solution involves using the `useEffect` hook in React (or the equivalent in other frameworks) to ensure the listener is unsubscribed when the component is unmounted.  This prevents memory leaks and keeps the application clean and efficient.