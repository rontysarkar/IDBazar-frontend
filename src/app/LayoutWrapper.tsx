"use client";

import ProductLoader from "@/lib/ProductLoader";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import AuthCheck from "@/store/provider/AuthProvider";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<ProductLoader />} persistor={persistor}>
        <Toaster />
        <AuthCheck>{children}</AuthCheck>
      </PersistGate>
    </Provider>
  );
}
