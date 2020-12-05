/*
 * Copyright (c) 2020 sanana the skenana
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import { Switch, Route } from 'wouter'
import Helmet from 'react-helmet'

import { Routes } from '@constants'

import Home from './Home/'
import About from './About/'
import NotFound from './NotFound/'

function Wouter () {
  return (
    <Switch>
      <Route path={Routes.HOME}>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Home />
      </Route>
      <Route path={Routes.ABOUT}>
        <Helmet>
          <title>About</title>
        </Helmet>
        <About />
      </Route>
      <Route>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <NotFound />
      </Route>
    </Switch>
  )
}

Wouter.displayName = 'Wouter'
export default React.memo(Wouter)