'use client';

import React, { useEffect, useState } from 'react';
import { getCategories } from './api/categories/getCategories';
import '#/styles/globals.css';
import { Web3Modal } from '../context/Web3Modal';
import { GlobalNav } from '#/ui/global-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  sampleModal: React.ReactNode;
}) {
  const [categories, setCategories] = useState([]);

 

  return (
    <html lang="en" className="[color-scheme:light]">
      <body className="overflow-y-scroll  pb-36">
      <GlobalNav />
      
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}