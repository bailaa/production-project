import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import React, { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
  const { theme } = useTheme();

  // @ts-ignore
  function flat(arr, depth = 1) {
    const result = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const el of arr) {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(depth);
      if (Array.isArray(el) && depth > 0) {
        result.push(...flat(el, depth - 1));
      } else {
        result.push(el);
      }
    }
    return result;
  }

  console.log(flat([1, [2], [3, [4]]]));

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
